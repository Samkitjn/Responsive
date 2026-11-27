// RESPONSIVE MOBILE NAVIGATION
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const menuIcon = menuToggle.querySelector("i");
const navigation = document.querySelector(".navbar");

document.documentElement.classList.add("js");


// Open or close the mobile menu

function setMenu(isOpen) {

    navLinks.classList.toggle("active", isOpen);

    menuToggle.setAttribute("aria-expanded", String(isOpen));

    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation" : "Open navigation"
    );

    menuIcon.className = isOpen
        ? "ri-close-line"
        : "ri-menu-3-line";
}


// Hamburger button click

menuToggle.addEventListener("click", () => {

    const isOpen =
        menuToggle.getAttribute("aria-expanded") === "true";

    setMenu(!isOpen);

});


// Close menu when a navigation link is clicked

document.querySelectorAll(".nav-links a").forEach((link) => {

    link.addEventListener("click", () => {

        if (window.innerWidth < 1024) {
            setMenu(false);
        }

    });

});


// Close menu when clicking outside navigation

document.addEventListener("click", (event) => {

    if (!navigation.contains(event.target)) {
        setMenu(false);
    }

});


// Close menu using Escape key

document.addEventListener("keydown", (event) => {

    const isOpen =
        menuToggle.getAttribute("aria-expanded") === "true";

    if (event.key === "Escape" && isOpen) {

        setMenu(false);
        menuToggle.focus();

    }

});


// Reset menu when switching to desktop layout

const desktopScreen = window.matchMedia("(min-width: 1024px)");

desktopScreen.addEventListener("change", () => {

    setMenu(false);

});

// AUTOMATIC FOOTER YEAR
const year = document.getElementById("year");

year.textContent = new Date().getFullYear();
