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

  /* ---- Contact Form (Web3Forms) ---- */
  var form = document.getElementById("contact-form");
  var statusBox = document.getElementById("form-status");

  if (form && statusBox) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      statusBox.className = "form-status";     // reset classes
      statusBox.style.display = "none";
      statusBox.textContent = "";

      var data = new FormData(form);

      fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      })
        .then(function (res) { return res.json(); })
        .then(function (json) {
          if (json.success) {
            statusBox.textContent =
              "Thank you! Your message has been sent. We will get back to you soon.";
            statusBox.className = "form-status success";
            form.reset();
          } else {
            statusBox.textContent =
              "Something went wrong. Please call us instead at +91 86025 65053.";
            statusBox.className = "form-status error";
          }
        })
        .catch(function () {
          statusBox.textContent =
            "Could not send your message. Please call us at +91 86025 65053.";
          statusBox.className = "form-status error";
        });
    });
  }
})();

