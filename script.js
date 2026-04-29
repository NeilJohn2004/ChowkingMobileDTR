document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.getElementById("mainNavbar");
  const yearNow = document.getElementById("yearNow");
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
  const navbarCollapse = document.getElementById("navMenu");
  const revealElements = document.querySelectorAll(".reveal");

  if (yearNow) {
    yearNow.textContent = String(new Date().getFullYear());
  }

  const updateNavbarState = () => {
    if (!navbar) return;
    if (window.scrollY > 24) {
      navbar.classList.add("navbar-scrolled");
    } else {
      navbar.classList.remove("navbar-scrolled");
    }
  };

  updateNavbarState();
  window.addEventListener("scroll", updateNavbarState);

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
      if (bsCollapse) {
        bsCollapse.hide();
      }
    });
  });

  const revealOnScroll = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.18,
      rootMargin: "0px 0px -30px 0px"
    }
  );

  revealElements.forEach((el) => revealOnScroll.observe(el));
});
