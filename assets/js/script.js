document.addEventListener("DOMContentLoaded", function() {
    const slider = document.getElementById("slider");
    if (!slider) return; // If there's no slider on this page, do nothing
  
    const slides = slider.querySelectorAll(".slide");
    let currentSlide = 0;
  
    // Show the first slide (already has .active by default in HTML)
    // If you prefer not to rely on HTML "active", you can remove it from HTML
    // and showSlide(0) here.
  
    // A helper to show the correct slide, hide others
    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.classList.remove("active");
        if (i === index) {
          slide.classList.add("active");
        }
      });
    }
  
    // On click anywhere in the slider, move to next slide
    slider.addEventListener("click", function() {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    });
  });
  