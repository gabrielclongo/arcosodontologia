const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

if (menuToggle && mainNav) {

    menuToggle.addEventListener("click", () => {
        mainNav.classList.toggle("active");
    });

    const navLinks = document.querySelectorAll(".main-nav a");

    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            mainNav.classList.remove("active");
        });
    });
}
