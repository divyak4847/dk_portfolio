document.addEventListener("DOMContentLoaded", function() {
    const logo = document.querySelector(".logo");
    const links = document.querySelectorAll("nav ul li a");

    // Logo Animation
    logo.style.opacity = "0";
    logo.style.transform = "translateY(-20px)";
    setTimeout(() => {
        logo.style.transition = "opacity 1s ease-out, transform 1s ease-out";
        logo.style.opacity = "1";
        logo.style.transform = "translateY(0)";
    }, 500);

    // Link Hover Animation
    links.forEach(link => {
        link.addEventListener("mouseover", () => {
            link.style.letterSpacing = "2px";
        });
        link.addEventListener("mouseout", () => {
            link.style.letterSpacing = "0px";
        });
    });
});
