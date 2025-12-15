  // ------------------ STAGES ------------------

  document.addEventListener("DOMContentLoaded", function () {
    const steps = Array.from(document.querySelectorAll(".step"));
    const prevBtn = document.querySelector(".step-arrow-left");
    const nextBtn = document.querySelector(".step-arrow-right");

    if (!steps.length || !prevBtn || !nextBtn) return;

    let current = 0; // index of active step

    function showStep(index) {
      steps.forEach((step, i) => {
        step.classList.toggle("step--active", i === index);
      });
    }

    prevBtn.addEventListener("click", function () {
      current = (current - 1 + steps.length) % steps.length;
      showStep(current);
    });

    nextBtn.addEventListener("click", function () {
      current = (current + 1) % steps.length;
      showStep(current);
    });

    // make sure the first step is visible on load
    showStep(current);
  });

  // ------------------ REFERENCES ------------------

  document.addEventListener("DOMContentLoaded", function () {
    const refsFrame = document.querySelector(".refs-frame");
    const toggleBtn = document.querySelector(".refs-toggle");
    const titleBtn = document.querySelector(".refs-title");

    if (!refsFrame || !toggleBtn) return;

    function toggleRefs(){
      const isOpen = refsFrame.classList.toggle("open");
      toggleBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
      titleBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
    }
    
    toggleBtn.addEventListener("click", toggleRefs);
    titleBtn.addEventListener("click", toggleRefs);
  });

