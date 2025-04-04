document.addEventListener("DOMContentLoaded", () => {
  // Mobile menu toggle
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (menuToggle) {
    menuToggle.addEventListener("click", function () {
      navLinks.classList.toggle("active");
      document.body.classList.toggle("menu-open");

      // Transform hamburger to X
      this.classList.toggle("active");
    });
  }

  // Close menu when clicking outside
  document.addEventListener("click", (event) => {
    if (
      navLinks &&
      navLinks.classList.contains("active") &&
      !event.target.closest(".nav-links") &&
      !event.target.closest(".menu-toggle")
    ) {
      navLinks.classList.remove("active");
      document.body.classList.remove("menu-open");
      if (menuToggle) {
        menuToggle.classList.remove("active");
      }
    }
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        // Close mobile menu if open
        if (navLinks && navLinks.classList.contains("active")) {
          navLinks.classList.remove("active");
          document.body.classList.remove("menu-open");
          if (menuToggle) {
            menuToggle.classList.remove("active");
          }
        }

        // Scroll to target
        window.scrollTo({
          top: targetElement.offsetTop - 80, // Adjust for header height
          behavior: "smooth",
        });
      }
    });
  });

  // Reveal animations on scroll
  const revealElements = document.querySelectorAll(
    ".timeline-item, .project-card, .process-step, .meta-item"
  );

  const revealOnScroll = () => {
    revealElements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (elementTop < windowHeight - 100) {
        element.classList.add("fade-in");
      }
    });
  };

  // Initial check
  revealOnScroll();

  // Check on scroll
  window.addEventListener("scroll", revealOnScroll);
});
