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

// ---- Theme toggle: explicit light/dark, stamped as data-theme on <html> ----
document.getElementById("themeToggle").addEventListener("click", function () {
  var current = root.getAttribute("data-theme");
  var prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  var isDark = current ? current === "dark" : prefersDark;
  root.setAttribute("data-theme", isDark ? "light" : "dark");
});

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

// ---- Hero canvas: a quiet starfield with one comet drifting through
// every so often. Purely decorative — sits behind the hero copy. Skipped
// entirely for prefers-reduced-motion, and paused via IntersectionObserver
// whenever the hero scrolls out of view so it isn't burning CPU/GPU on a
// section nobody's looking at. ----
(function initHeroCanvas() {
  var canvas = document.getElementById("heroCanvas");
  var hero = document.querySelector(".hero");
  if (!canvas || !hero) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  var ctx = canvas.getContext("2d");
  var dpr = Math.min(window.devicePixelRatio || 1, 2);
  var stars = [];
  var comet = null;
  var frame = 0;
  var nextCometFrame = 90;
  var running = false;
  var rafId = null;

  function seedStars(w, h) {
    var count = Math.round((w * h) / 9000);
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
    var rect = hero.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    canvas.style.width = rect.width + "px";
    canvas.style.height = rect.height + "px";
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    seedStars(rect.width, rect.height);
  }

  function spawnComet(w, h) {
    comet = {
      x: -60,
      y: h * (0.08 + Math.random() * 0.32),
      vx: w / 420,
      vy: (h * 0.16) / 420,
      len: 90,
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

  var heroObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) start();
        else stop();
      });
    },
    { threshold: 0 },
  );
  heroObserver.observe(hero);
})();

// ---- Cursor-following glow inside the hero — the one extra "layered
// depth" touch. Desktop/mouse only, and skipped for reduced-motion. Sets
// CSS custom properties that a radial-gradient in styles.css reads
// (.hero::before), so the actual paint work stays on the CSS side. ----
(function initCursorGlow() {
  var hero = document.querySelector(".hero");
  if (!hero) return;
  var canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  var prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!canHover || prefersReducedMotion) return;

  hero.addEventListener("mousemove", function (e) {
    var rect = hero.getBoundingClientRect();
    var x = ((e.clientX - rect.left) / rect.width) * 100;
    var y = ((e.clientY - rect.top) / rect.height) * 100;
    hero.style.setProperty("--mx", x + "%");
    hero.style.setProperty("--my", y + "%");
  });
})();
