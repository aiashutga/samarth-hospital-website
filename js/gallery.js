/* ==========================================================================
   Samarth Hospital — Photo Gallery Lightbox
   Progressive enhancement for photo tiles.
   Opens full-size image in a native <dialog> with keyboard & touch navigation.
   Loaded on index.html and gallery.html only.
   ========================================================================== */

(function () {
  "use strict";

  var tiles = Array.prototype.slice.call(document.querySelectorAll(".gallery-tile"));
  if (!tiles.length) {
    return;
  }

  // Create native dialog if not already in DOM
  var dialog = document.getElementById("gallery-dialog");
  if (!dialog) {
    dialog = document.createElement("dialog");
    dialog.id = "gallery-dialog";
    dialog.className = "gallery-dialog";
    dialog.setAttribute("aria-label", "Photo preview");
    dialog.innerHTML = [
      '<div class="gallery-dialog-box">',
      '  <button type="button" class="gallery-dialog-btn gallery-dialog-close" aria-label="Close photo preview">&times;</button>',
      '  <div class="gallery-dialog-media">',
      '    <img class="gallery-dialog-img" src="" alt="" />',
      '  </div>',
      '  <div class="gallery-dialog-bar">',
      '    <p class="gallery-dialog-caption"></p>',
      '    <span class="gallery-dialog-counter" aria-live="polite"></span>',
      '  </div>',
      '  <button type="button" class="gallery-dialog-btn gallery-dialog-prev" aria-label="Previous photo">&#10094;</button>',
      '  <button type="button" class="gallery-dialog-btn gallery-dialog-next" aria-label="Next photo">&#10095;</button>',
      '</div>'
    ].join("");
    document.body.appendChild(dialog);
  }

  var imgElem = dialog.querySelector(".gallery-dialog-img");
  var captionElem = dialog.querySelector(".gallery-dialog-caption");
  var counterElem = dialog.querySelector(".gallery-dialog-counter");
  var closeBtn = dialog.querySelector(".gallery-dialog-close");
  var prevBtn = dialog.querySelector(".gallery-dialog-prev");
  var nextBtn = dialog.querySelector(".gallery-dialog-next");

  var currentIndex = 0;
  var lastFocusedElement = null;

  function updatePhoto(index) {
    if (index < 0) {
      index = tiles.length - 1;
    } else if (index >= tiles.length) {
      index = 0;
    }
    currentIndex = index;

    var tile = tiles[currentIndex];
    var fullSrc = tile.getAttribute("href");
    var thumbImg = tile.querySelector("img");
    var alt = thumbImg ? thumbImg.getAttribute("alt") || "" : "";
    var caption = tile.getAttribute("data-caption") || (tile.querySelector(".gallery-tile-caption") ? tile.querySelector(".gallery-tile-caption").textContent.trim() : "");

    imgElem.setAttribute("src", fullSrc);
    imgElem.setAttribute("alt", alt);
    captionElem.textContent = caption;
    counterElem.textContent = (currentIndex + 1) + " of " + tiles.length;
  }

  function openLightbox(index, trigger) {
    lastFocusedElement = trigger || document.activeElement;
    updatePhoto(index);

    if (typeof dialog.showModal === "function") {
      dialog.showModal();
    } else {
      dialog.setAttribute("open", "");
    }
    document.body.style.overflow = "hidden";
    closeBtn.focus();
  }

  function closeLightbox() {
    if (dialog.hasAttribute("open")) {
      if (typeof dialog.close === "function") {
        dialog.close();
      } else {
        dialog.removeAttribute("open");
      }
    }
    document.body.style.overflow = "";
    if (lastFocusedElement && typeof lastFocusedElement.focus === "function") {
      lastFocusedElement.focus();
    }
  }

  function showPrev() {
    updatePhoto(currentIndex - 1);
  }

  function showNext() {
    updatePhoto(currentIndex + 1);
  }

  // Attach click listener to each tile on this page
  tiles.forEach(function (tile, index) {
    tile.addEventListener("click", function (e) {
      e.preventDefault();
      openLightbox(index, tile);
    });
  });

  // Dialog buttons
  closeBtn.addEventListener("click", closeLightbox);
  prevBtn.addEventListener("click", showPrev);
  nextBtn.addEventListener("click", showNext);

  // Close when clicking dialog backdrop
  dialog.addEventListener("click", function (e) {
    if (e.target === dialog) {
      closeLightbox();
    }
  });

  // Handle native cancel event (Esc key in native dialog)
  dialog.addEventListener("cancel", function (e) {
    e.preventDefault();
    closeLightbox();
  });

  // Keyboard navigation inside dialog
  dialog.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      showPrev();
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      showNext();
    } else if (e.key === "Escape") {
      e.preventDefault();
      closeLightbox();
    }
  });
})();
