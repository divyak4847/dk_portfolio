document.addEventListener("DOMContentLoaded", function() {
  /* OPEN MODAL by clicking the project video */
  const projectVideos = document.querySelectorAll(".project-video");
  projectVideos.forEach(video => {
    video.addEventListener("click", (e) => {
      e.preventDefault();
      const projectId = video.getAttribute("data-project");
      const modal = document.getElementById(`modal-${projectId}`);
      if (modal) {
        modal.style.display = "flex"; // show the modal
      }
    });
  });

  /* CLOSE MODAL (X) */
  const closeButtons = document.querySelectorAll(".close");
  closeButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const modal = btn.closest(".modal");
      modal.style.display = "none";
      resetSlides(modal);
    });
  });

  /* CLICK OUTSIDE MODAL CONTENT to close */
  const modals = document.querySelectorAll(".modal");
  modals.forEach(modal => {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
        resetSlides(modal);
      }
    });

    /* Slide fade logic: click inside .modal-slider to go next */
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
