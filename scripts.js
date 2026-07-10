// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      e.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});

// Navbar Shadow

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.style.boxShadow = "0 15px 35px rgba(0,0,0,.12)";
  } else {
    navbar.style.boxShadow = "0 15px 35px rgba(0,0,0,.08)";
  }
});

// Reveal Animation

const revealElements = document.querySelectorAll(
  ".hero-content,.hero-image,.stat-card,.about-content,.about-image,.service-card,.project-card,.testimonial-card,.cta-box,.contact-container,.footer-grid",
);

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },

  {
    threshold: 0.2,
  },
);

revealElements.forEach((el) => {
  revealObserver.observe(el);
});

// Counter Animation

const counters = document.querySelectorAll(".count");

const counterObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      const counter = entry.target;

      const target = +counter.dataset.target;

      let current = 0;

      const speed = target / 100;

      function updateCounter() {
        current += speed;

        if (current < target) {
          counter.innerText = Math.floor(current);

          requestAnimationFrame(updateCounter);
        } else {
          counter.innerText = target;
        }
      }

      updateCounter();

      counterObserver.unobserve(counter);
    });
  },
  { threshold: 0.5 },
);

counters.forEach((counter) => {
  counterObserver.observe(counter);
});

// Scroll To Top

const scrollBtn = document.querySelector(".scroll-top-btn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollBtn.classList.add("show");
  } else {
    scrollBtn.classList.remove("show");
  }
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,

    behavior: "smooth",
  });
});

// Mobile Menu

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

const dropdowns = document.querySelectorAll(".dropdown > a");

dropdowns.forEach((drop) => {
  drop.addEventListener("click", (e) => {
    if (window.innerWidth <= 992) {
      e.preventDefault();

      drop.parentElement.classList.toggle("active");
    }
  });
});
