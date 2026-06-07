// ========== Language menu ==========
const languageBtn = document.querySelector(".header__buttons-menu");
const languageMenu = document.querySelector(".header__language-menu");

// ===== Toggle menu open/close when language button is clicked =====
if (languageBtn && languageMenu) {
  languageBtn.addEventListener("click", () => {
    languageMenu.classList.toggle("active");
  });

// ===== Close the language menu when clicking outside of it =====
  document.addEventListener("click", (event) => {
    if (!languageBtn.contains(event.target) && !languageMenu.contains(event.target)) {
      languageMenu.classList.remove("active");
    }
  });
}

// ========== Language detection ==========
function getLang() {
  const path = window.location.pathname;

  if (path.startsWith("/ru")) return "ru";
  if (path.startsWith("/es")) return "es";
  if (path.startsWith("/ja")) return "ja";
  if (path.startsWith("/zh")) return "zh";
  if (path.startsWith("/hi")) return "hi";

  return "en";
}

// ========== Rotating titles ==========
const titlesByLang = {
  en: [
    "Moto Blogger",
    "Blogger",
    "Content Creator",
    "Travel Rider",
    "Mariangel777"
  ],
  ru: [
    "Мото-Блогер",
    "Блогер",
    "Контент Мейкер",
    "Путешественник",
    "Mariangel777"
  ],
  es: [
    "Motoblogger",
    "Bloguero",
    "Creador de contenido",
    "Viajero",
    "Mariangel777"
  ],
  ja: [
    "バイクブロガー",
    "ブロガー",
    "コンテンツクリエイター",
    "トラベルライダー",
    "Mariangel777"
  ],
  zh: [
    "摩托博主",
    "博主",
    "内容创作者",
    "旅行骑手",
    "Mariangel777"
  ],
  hi: [
    "मोटो ब्लॉगर",
    "ब्लॉगर",
    "कंटेंट क्रिएटर",
    "ट्रैवल राइडर",
    "Mariangel777"
  ]
};

const lang = getLang();
const titles = titlesByLang[lang] || titlesByLang.en;

let index = 0;
const titleElement = document.querySelector(".header__titles-highlight");

if (titleElement) {
  function changeText() {
    titleElement.textContent = titles[index];
    index = (index + 1) % titles.length;
  }

  changeText();
  setInterval(changeText, 1500);
}

// ========== Home button ==========
const homeBtn = document.querySelector(".header__buttons-home");

if (homeBtn) {
  homeBtn.addEventListener("click", () => {
    window.location.href = '/';
  });
}