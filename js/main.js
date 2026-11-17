/* ==========================================================================
   Samarth Hospital — Main JavaScript
   Handles: mobile menu toggle, contact form submission.
   No frameworks. Keeps things simple.
   ========================================================================== */

(function () {
  "use strict";

  /* ---- Mobile Menu Toggle ---- */
  var menuBtn = document.getElementById("menu-toggle");
  var mobileNav = document.getElementById("mobile-nav");

  if (menuBtn && mobileNav) {
    menuBtn.addEventListener("click", function () {
      var isOpen = mobileNav.classList.toggle("open");
      // Update aria attribute so screen readers know the state
      menuBtn.setAttribute("aria-expanded", isOpen);
    });
  }
})();

