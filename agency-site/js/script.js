document.getElementById("year").textContent =
  "© " + new Date().getFullYear() + " Comet Builds";

var root = document.documentElement;

// ---- Page load fade-in: body starts at opacity 0 (see styles.css). This
// script tag sits at the end of <body>, so the DOM (including the hero's
// .reveal elements below) is already parsed by the time this line runs —
// triggering the fade here, rather than on window "load", keeps it in
// sync with the hero's own entrance animation instead of lagging behind
// image/font loading. ----
document.body.classList.add("loaded");

// ---- Theme toggle: explicit light/dark, stamped as data-theme on <html>.
// The button itself has been removed from the nav (site is dark-only for
// now), so this is guarded to a no-op rather than deleted — dropping the
// button back into index.html is all it'd take to bring it back. ----
var themeToggleBtn = document.getElementById("themeToggle");
if (themeToggleBtn) {
  themeToggleBtn.addEventListener("click", function () {
    var current = root.getAttribute("data-theme");
    var prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    var isDark = current ? current === "dark" : prefersDark;
    root.setAttribute("data-theme", isDark ? "light" : "dark");
  });
}

// ---- Scroll-reveal ----
var revealEls = document.querySelectorAll(".reveal");
var io = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        io.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 },
);
revealEls.forEach(function (el) {
  io.observe(el);
});

// ---- Timeline fill tracks scroll position through the section ----
var timelineEl = document.getElementById("timeline");
var timelineFill = document.getElementById("timelineFill");
function updateTimeline() {
  var rect = timelineEl.getBoundingClientRect();
  var vh = window.innerHeight;
  var total = rect.height + vh * 0.4;
  var progressed = vh * 0.8 - rect.top;
  var pct = Math.max(0, Math.min(1, progressed / total));
  timelineFill.style.height = pct * 100 + "%";
}
window.addEventListener("scroll", updateTimeline, { passive: true });
updateTimeline();

// ---- Testimonials autoplay + dots ----
var slides = document.querySelectorAll(".testi-slide");
var dots = document.querySelectorAll(".testi-dot");
var activeSlide = 0;
function showSlide(i) {
  slides.forEach(function (s, idx) {
    s.classList.toggle("active", idx === i);
  });
  dots.forEach(function (d, idx) {
    d.classList.toggle("active", idx === i);
  });
  activeSlide = i;
}
dots.forEach(function (dot, idx) {
  dot.addEventListener("click", function () {
    showSlide(idx);
  });
});
setInterval(function () {
  showSlide((activeSlide + 1) % slides.length);
}, 6000);

// ---- Contact form: submits to Formspree (see the form's `action` in
// index.html — replace YOUR_FORM_ID with your own before this goes live) ----
var contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", function (e) {
  e.preventDefault();
  var errorEl = document.getElementById("formError");
  errorEl.style.display = "none";

  fetch(contactForm.action, {
    method: "POST",
    body: new FormData(contactForm),
    headers: { Accept: "application/json" },
  })
    .then(function (response) {
      if (response.ok) {
        contactForm.style.display = "none";
        document.getElementById("successBox").style.display = "block";
      } else {
        errorEl.style.display = "block";
      }
    })
    .catch(function () {
      errorEl.style.display = "block";
    });
});

var prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
var canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

// ---- Background canvas: a quiet starfield with one comet drifting all
// the way across the viewport every so often. Fixed to the screen (not
// the hero), so it plays behind every section as you scroll, not just
// the top. Purely decorative — skipped entirely for prefers-reduced-motion,
// and paused via the Page Visibility API when the tab isn't active. ----
(function initBackgroundCanvas() {
  var canvas = document.getElementById("bgCanvas");
  if (!canvas || prefersReducedMotion) return;

  var ctx = canvas.getContext("2d");
  var dpr = Math.min(window.devicePixelRatio || 1, 2);
  var stars = [];
  var comet = null;
  var frame = 0;
  var nextCometFrame = 90;
  var running = false;
  var rafId = null;

  function seedStars(w, h) {
    var count = Math.round((w * h) / 11000);
    stars = [];
    for (var i = 0; i < count; i++) {
      stars.push({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 1.2 + 0.3,
        baseAlpha: Math.random() * 0.5 + 0.2,
        twinkleSpeed: Math.random() * 0.015 + 0.005,
        phase: Math.random() * Math.PI * 2,
      });
    }
  }

  function resize() {
    var w = window.innerWidth;
    var h = window.innerHeight;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = w + "px";
    canvas.style.height = h + "px";
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    seedStars(w, h);
  }

  function spawnComet(w, h) {
    comet = {
      x: -60,
      y: h * (0.05 + Math.random() * 0.5),
      vx: w / 480,
      vy: (h * 0.12) / 480,
      len: 100,
    };
  }

  function draw() {
    var w = canvas.width / dpr;
    var h = canvas.height / dpr;
    ctx.clearRect(0, 0, w, h);

    for (var i = 0; i < stars.length; i++) {
      var s = stars[i];
      var alpha = Math.max(0, s.baseAlpha + Math.sin(frame * s.twinkleSpeed + s.phase) * 0.2);
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(214, 236, 250, " + alpha + ")";
      ctx.fill();
    }

    if (comet) {
      comet.x += comet.vx;
      comet.y += comet.vy;
      var tailX = comet.x - comet.len;
      var tailY = comet.y - comet.len * (comet.vy / comet.vx);
      var grad = ctx.createLinearGradient(comet.x, comet.y, tailX, tailY);
      grad.addColorStop(0, "rgba(160, 220, 250, 0.85)");
      grad.addColorStop(1, "rgba(160, 220, 250, 0)");
      ctx.strokeStyle = grad;
      ctx.lineWidth = 2;
      ctx.lineCap = "round";
      ctx.beginPath();
      ctx.moveTo(comet.x, comet.y);
      ctx.lineTo(tailX, tailY);
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(comet.x, comet.y, 2, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(255, 255, 255, 0.95)";
      ctx.fill();

      if (comet.x - comet.len > w + 40) {
        comet = null;
        nextCometFrame = frame + 480 + Math.random() * 300; // pause before the next pass
      }
    } else if (frame >= nextCometFrame) {
      spawnComet(w, h);
    }

    frame++;
    if (running) rafId = requestAnimationFrame(draw);
  }

  function start() {
    if (running) return;
    running = true;
    rafId = requestAnimationFrame(draw);
  }
  function stop() {
    running = false;
    if (rafId) cancelAnimationFrame(rafId);
  }

  resize();
  window.addEventListener("resize", resize, { passive: true });
  document.addEventListener("visibilitychange", function () {
    if (document.hidden) stop();
    else start();
  });

  start();
})();

// ---- Cursor glow: a soft blue light that follows the pointer across the
// whole page (see #cursorGlow in styles.css), not just the hero. Desktop
// mouse only, skipped for reduced-motion. ----
(function initCursorGlow() {
  var glow = document.getElementById("cursorGlow");
  if (!glow || !canHover || prefersReducedMotion) return;

  document.addEventListener("mousemove", function (e) {
    var x = (e.clientX / window.innerWidth) * 100;
    var y = (e.clientY / window.innerHeight) * 100;
    document.documentElement.style.setProperty("--mx", x + "%");
    document.documentElement.style.setProperty("--my", y + "%");
    glow.classList.add("is-active");
  });
  document.addEventListener("mouseleave", function () {
    glow.classList.remove("is-active");
  });
})();

// ---- Click-and-drag sparkle trail: a little bit of fun, not a core
// feature — press and drag anywhere to leave a trail of fading sparkles.
// Uses pointer events so it works with touch too. Skipped for
// prefers-reduced-motion (dragging still works, it just doesn't spawn
// particles). ----
(function initSparkleTrail() {
  var canvas = document.getElementById("fxCanvas");
  if (!canvas || prefersReducedMotion) return;

  var ctx = canvas.getContext("2d");
  var dpr = Math.min(window.devicePixelRatio || 1, 2);
  var particles = [];
  var isDragging = false;
  var running = false;
  var rafId = null;
  var MAX_PARTICLES = 160;

  function resize() {
    var w = window.innerWidth;
    var h = window.innerHeight;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = w + "px";
    canvas.style.height = h + "px";
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  resize();
  window.addEventListener("resize", resize, { passive: true });

  function spawnSparkle(x, y) {
    if (particles.length >= MAX_PARTICLES) return;
    var angle = Math.random() * Math.PI * 2;
    var speed = Math.random() * 0.6 + 0.15;
    particles.push({
      x: x,
      y: y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed - 0.35, // gentle upward drift
      size: Math.random() * 2 + 1.5,
      life: 1,
      decay: Math.random() * 0.02 + 0.018,
      hue: Math.random() < 0.5 ? "160, 220, 250" : "255, 255, 255",
    });
  }

  function draw() {
    var w = canvas.width / dpr;
    var h = canvas.height / dpr;
    ctx.clearRect(0, 0, w, h);

    for (var i = particles.length - 1; i >= 0; i--) {
      var p = particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.006; // slight gravity so sparkles settle rather than drift forever
      p.life -= p.decay;
      if (p.life <= 0) {
        particles.splice(i, 1);
        continue;
      }
      var r = p.size * p.life;
      ctx.beginPath();
      ctx.arc(p.x, p.y, Math.max(r, 0.1), 0, Math.PI * 2);
      ctx.fillStyle = "rgba(" + p.hue + ", " + p.life + ")";
      ctx.shadowColor = "rgba(" + p.hue + ", " + p.life * 0.8 + ")";
      ctx.shadowBlur = 6;
      ctx.fill();
    }
    ctx.shadowBlur = 0;

    if (particles.length > 0 || isDragging) {
      rafId = requestAnimationFrame(draw);
    } else {
      running = false;
    }
  }

  function ensureRunning() {
    if (running) return;
    running = true;
    rafId = requestAnimationFrame(draw);
  }

  function handleMove(x, y) {
    if (!isDragging) return;
    spawnSparkle(x, y);
    spawnSparkle(x + (Math.random() - 0.5) * 4, y + (Math.random() - 0.5) * 4);
    ensureRunning();
  }

  window.addEventListener("pointerdown", function (e) {
    isDragging = true;
    handleMove(e.clientX, e.clientY);
  });
  window.addEventListener("pointermove", function (e) {
    handleMove(e.clientX, e.clientY);
  });
  window.addEventListener("pointerup", function () {
    isDragging = false;
  });
  window.addEventListener("pointercancel", function () {
    isDragging = false;
  });
})();

// ---- "Click me!" hint: follows the cursor for the first few seconds (or
// until the visitor's first click, whichever comes first), pointing them
// toward the click-and-drag sparkle trail above. Never shown again after
// that — this is a one-time nudge, not a persistent UI element. ----
(function initClickHint() {
  var hint = document.getElementById("clickHint");
  if (!hint || !canHover || prefersReducedMotion) return;

  var dismissed = false;
  function dismiss() {
    if (dismissed) return;
    dismissed = true;
    hint.classList.remove("is-visible");
    document.removeEventListener("mousemove", onMove);
    document.removeEventListener("pointerdown", dismiss);
  }
  function onMove(e) {
    document.documentElement.style.setProperty("--hx", e.clientX + "px");
    document.documentElement.style.setProperty("--hy", e.clientY + "px");
    hint.classList.add("is-visible");
  }

  document.addEventListener("mousemove", onMove);
  document.addEventListener("pointerdown", dismiss);
  setTimeout(dismiss, 5000); // don't linger forever if nobody moves the mouse near it
})();
