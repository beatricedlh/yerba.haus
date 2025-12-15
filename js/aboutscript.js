  // ------------------ FAQ & TERMS ------------------

  document.addEventListener("DOMContentLoaded", function () {

    function bindToggle(frameSelector, titleSelector, toggleSelector) {
      const frame = document.querySelector(frameSelector);
      if (!frame) return;
  
      const title = frame.querySelector(titleSelector);
      const toggle = frame.querySelector(toggleSelector);
  
      if (!title || !toggle) return;
  
      function doToggle() {
        const isOpen = frame.classList.toggle("open");
        title.setAttribute("aria-expanded", isOpen ? "true" : "false");
        toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
      }
  
      title.addEventListener("click", doToggle);
      toggle.addEventListener("click", doToggle);
    }
  
    bindToggle(".faqs-frame",  ".faqs-title",  ".faqs-toggle");
    bindToggle(".terms-frame", ".terms-title", ".terms-toggle");
    bindToggle(".credits-frame", ".credits-title", ".credits-toggle");
  });