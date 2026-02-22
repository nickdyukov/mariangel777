// ====== Language menu ======
const LngBtn = document.querySelector(".LngBtn");
const LngMenu = document.querySelector(".LngMenu");

if (LngBtn && LngMenu) {
  LngBtn.addEventListener("click", () => {
    LngMenu.classList.toggle("active");
  });

  // === Close the language menu when clicking outside ===
  document.addEventListener("click", (event) => {
    if (!LngBtn.contains(event.target) && !LngMenu.contains(event.target)) {
      LngMenu.classList.remove("active");
    }
  });
}

// ====== Language switch ======
const EnBtn = document.querySelector(".EnBtn");
const RuBtn = document.querySelector(".RuBtn");
const EsBtn = document.querySelector(".EsBtn");

if (EnBtn) EnBtn.addEventListener("click", () => setLang("en"));
if (RuBtn) RuBtn.addEventListener("click", () => setLang("ru"));
if (EsBtn) EsBtn.addEventListener("click", () => setLang("es"));

function setLang(lang) {
  const elements = document.querySelectorAll("[data-en]");
  elements.forEach(function (el) {
    const text = el.getAttribute("data-" + lang);
    if (text) {
      el.innerHTML = text;
    }
  });

  // === Save selected language ===
  localStorage.setItem("lang", lang);
}

// === Restore saved language when page reloads ===
const savedLang = localStorage.getItem("lang");
if (savedLang) {
  setLang(savedLang);
}