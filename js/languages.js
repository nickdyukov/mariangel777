// ====== Language menu ======
const lngBtn = document.querySelector(".lng-btn");
const lngMenu = document.querySelector(".lng-menu");

if (lngBtn && lngMenu) {
  lngBtn.addEventListener("click", () => {
    lngMenu.classList.toggle("active");
  });

  // ====== Close the language menu when clicking outside ======
  document.addEventListener("click", (event) => {
    if (!lngBtn.contains(event.target) && !lngMenu.contains(event.target)) {
      lngMenu.classList.remove("active");
    }
  });
}

// ====== Language switch ======
const enBtn = document.querySelector(".en-btn");
const ruBtn = document.querySelector(".ru-btn");
const esBtn = document.querySelector(".es-btn");

if (enBtn) enBtn.addEventListener("click", () => setLang("en"));
if (ruBtn) ruBtn.addEventListener("click", () => setLang("ru"));
if (esBtn) esBtn.addEventListener("click", () => setLang("es"));

function setLang(lang) {
  const elements = document.querySelectorAll("[data-en]");
  elements.forEach(function (el) {
    const text = el.getAttribute("data-" + lang);
    if (text) {
      el.innerHTML = text;
    }
  });

  // ====== Update <html lang> ======
  document.documentElement.lang = lang;

  // ====== Save selected language ======
  localStorage.setItem("lang", lang);
}

// ====== Restore saved language when page reloads ======
const savedLang = localStorage.getItem("lang");
if (savedLang) {
  setLang(savedLang);
}