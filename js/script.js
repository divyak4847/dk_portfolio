document.addEventListener("DOMContentLoaded", function() {
  // OPEN MODAL with fade-in-up
  const slideLinks = document.querySelectorAll(".open-slides");
  slideLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const projectId = link.getAttribute("data-project");
      const modal = document.getElementById(`modal-${projectId}`);
      if (modal) {
        modal.classList.add("show"); // triggers fade-in-up
      }
    });
  });

  // CLOSE MODAL (X)
  const closeButtons = document.querySelectorAll(".close");
  closeButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const modal = btn.closest(".modal");
      modal.classList.remove("show");
      resetSlides(modal);
    });
  });

  // CLICK OUTSIDE => close
  const modals = document.querySelectorAll(".modal");
  modals.forEach(modal => {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.classList.remove("show");
        resetSlides(modal);
      }
    });

    // Slide fade logic: click inside .modal-slider => next slide
    const slider = modal.querySelector(".modal-slider");
    if (slider) {
      slider.addEventListener("click", () => {
        let currentIndex = parseInt(slider.getAttribute("data-slide"), 10) || 0;
        const slides = slider.querySelectorAll(".modal-slide");
        // Hide current
        slides[currentIndex].classList.remove("active");
        // Next index
        currentIndex = (currentIndex + 1) % slides.length;
        // Show next
        slides[currentIndex].classList.add("active");
        slider.setAttribute("data-slide", currentIndex);
      });
    }
  });

  function resetSlides(modal) {
    const slider = modal.querySelector(".modal-slider");
    if (slider) {
      slider.setAttribute("data-slide", 0);
      const slides = slider.querySelectorAll(".modal-slide");
      slides.forEach((slide, i) => {
        slide.classList.remove("active");
        if (i === 0) slide.classList.add("active");
      });
    }
  }
});
