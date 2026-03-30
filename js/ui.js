// ====== Theme Management ======
// === Restore saved theme or default to dark ===
const savedTheme = localStorage.getItem("theme") || "dark";

document.body.classList.toggle("dark", savedTheme === "dark");
document.body.classList.toggle("light", savedTheme === "light");

const themeToggles = document.querySelectorAll(".theme-toggle, .mobile-theme-toggle");

themeToggles.forEach(btn => {
  btn.addEventListener("click", () => {
    const isDark = document.body.classList.toggle("dark");
    document.body.classList.toggle("light", !isDark);

    // === Save the selected theme in localStorage ===
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });
});

// ====== Language menu ======
const languageBtn = document.querySelector(".menu-btn");
const languageMenu = document.querySelector(".lang-menu");

// === Toggle menu open/close when language button is clicked ===
if (languageBtn && languageMenu) {
  languageBtn.addEventListener("click", () => {
    languageMenu.classList.toggle("active");
  });

  // === Close the language menu when clicking outside of it ===
  document.addEventListener("click", (event) => {
    if (!languageBtn.contains(event.target) && !languageMenu.contains(event.target)) {
      languageMenu.classList.remove("active");
    }
  });
}

// ====== Mobile menu ======
const mobileBtn = document.querySelector(".mobile-btn");
const mobileMenu = document.querySelector(".mobile-menu");

// === Toggle menu open/close when menu button is clicked ===
if (mobileBtn && mobileMenu) {
  mobileBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
  });

  // === Close the mobile menu when clicking outside of it ===
  document.addEventListener("click", (event) => {
    if (!mobileBtn.contains(event.target) && !mobileMenu.contains(event.target)) {
      mobileMenu.classList.remove("active");
    }
  });
}

// ====== Home button ======
const homeBtn = document.querySelector(".home-btn");

if (homeBtn) {
  homeBtn.addEventListener("click", () => {
    window.location.href = "/";
  });
}