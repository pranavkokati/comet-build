document.getElementById("year").textContent =
  "© " + new Date().getFullYear() + " Comet Builds";

var root = document.documentElement;

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
