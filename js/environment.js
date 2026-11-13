/* ==========================================================================
   Samarth Hospital — Environment Report Tabs (Phase 3B)
   Under 80 lines. Pure vanilla JS, no external libraries.
   ========================================================================== */
(function () {
  "use strict";

  var tablist = document.querySelector('[role="tablist"]');
  if (!tablist) return;

  var tabs = Array.prototype.slice.call(tablist.querySelectorAll('[role="tab"]'));
  var panels = tabs.map(function (tab) {
    return document.getElementById(tab.getAttribute("aria-controls"));
  });

  document.body.classList.add("js-tabs-enabled");

  function switchTab(index, setFocus, updateHash) {
    if (index < 0 || index >= tabs.length) index = 0;
    tabs.forEach(function (tab, i) {
      var isSelected = i === index;
      tab.setAttribute("aria-selected", isSelected ? "true" : "false");
      tab.tabIndex = isSelected ? 0 : -1;
      tab.classList.toggle("is-active", isSelected);
      if (panels[i]) {
        panels[i].hidden = !isSelected;
        panels[i].classList.toggle("is-active", isSelected);
      }
    });
    if (setFocus && tabs[index]) tabs[index].focus();
    if (updateHash && panels[index]) {
      history.replaceState(null, "", "#" + panels[index].id);
    }
  }

  tablist.addEventListener("click", function (e) {
    var tab = e.target.closest('[role="tab"]');
    if (!tab) return;
    var idx = tabs.indexOf(tab);
    if (idx !== -1) switchTab(idx, false, true);
  });

  tablist.addEventListener("keydown", function (e) {
    var idx = tabs.indexOf(document.activeElement);
    if (idx === -1) return;
    var nextIdx = -1;
    if (e.key === "ArrowRight" || e.key === "ArrowDown") nextIdx = (idx + 1) % tabs.length;
    else if (e.key === "ArrowLeft" || e.key === "ArrowUp") nextIdx = (idx - 1 + tabs.length) % tabs.length;
    else if (e.key === "Home") nextIdx = 0;
    else if (e.key === "End") nextIdx = tabs.length - 1;

    if (nextIdx !== -1) {
      e.preventDefault();
      switchTab(nextIdx, true, true);
    }
  });

  function handleHash() {
    var hash = window.location.hash.replace("#", "");
    var targetIdx = -1;
    panels.forEach(function (p, i) {
      if (p && p.id === hash) targetIdx = i;
    });
    switchTab(targetIdx !== -1 ? targetIdx : 0, false, false);
  }

  handleHash();
  window.addEventListener("hashchange", handleHash);
})();

