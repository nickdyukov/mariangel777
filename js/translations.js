// ====== Translations ======
const translations = {
  en: {
    theme_toggle: "Theme toggle",
    lang_btn: "Languages",

    title: "Maria Dyukova",
    main_text1: "#MotoGirl #Travel",
    main_text2: "Total audience: 310.000",

    about_heading: "About me:",
    about_focus: "Main focus in life: Self-development and Living in the moment.",
    about_interests: "Interests: Moto, Cars, Fitness, Mountains, Travel, Sunsets.",
    about_languages: "Languages: Russian (native), English B1.",
    about_born: 'Born in <a href="https://en.wikipedia.org/wiki/Nizhny_Tagil" target="_blank" rel="noopener noreferrer">Nizhny Tagil</a>, Russia.',
    about_birthday: "Birthday: April 23.",

    contact_methods_heading: "Contact Methods:",
    social_media_heading: "Social media:",
    donates: '<a href="https://www.donationalerts.com/r/mariangel777" target="_blank" rel="noopener noreferrer"><img src="/assets/images/money.png" alt="" aria-hidden="true">Donate me ❤</a>',
    track_heading: "My track:",

    footer_copyright: "© 2026 Mariangel777. All rights reserved.",
    footer_author: 'Created by <a href="https://github.com/nickdyukov" target="_blank" rel="noopener noreferrer">NickDyukov</a>.',

    error_message: "The page you’re looking for doesn’t exist or has been moved.",
    error_home_link: "Go back"
  },
  ru: {
    theme_toggle: "Сменить тему",
    lang_btn: "Языки",

    title: "Мария Дюкова",
    main_text1: "#МотоДевочка #Путешествия",
    main_text2: "Общее количество аудитории: 310 000",

    about_heading: "Обо мне:",
    about_focus: "Главное в жизни: Саморазвитие и Жить в моменте",
    about_interests: "Интересы: Мото, Авто, Фитнесс, Горы, Путешествия, Закаты.",
    about_languages: "Языки: Русский (родной), Английский B1",
    about_born: 'Родилась в г. <a href="https://ru.wikipedia.org/wiki/Нижний_Тагил" target="_blank" rel="noopener noreferrer">Нижний Тагил</a>, Россия.',
    about_birthday: "День рождения: 23 апреля",

    contact_methods_heading: "Контакты:",
    social_media_heading: "Социальные сети:",
    donates: '<img src="/assets/images/money.png" alt="" aria-hidden="true"><a href="https://www.donationalerts.com/r/mariangel777" target="_blank" rel="noopener noreferrer">Задонатить мне ❤</a>',
    track_heading:"Мой трек:",

    footer_copyright: "© 2026 Mariangel777. Все права защищены.",
    footer_author: 'Сайт создан:  <a href="https://github.com/nickdyukov" target="_blank" rel="noopener noreferrer">NickDyukov</a>.',

    error_message: "Страница не найдена или была перемещена.",
    error_home_link: "Вернуться обратно"
  },
  es: {
    theme_toggle: "Cambiar tema",
    lang_btn: "Idiomas",

    title: "María Dúkova",
    main_text1: "ChicaMoto #Viajes",
    main_text2: "Público total: 310.000",

    about_heading: "Sobre mí:",
    about_focus: "Lo más importante en la vida: Desarrollo personal y Vivir el momento.",
    about_interests: "Intereses: Moto, Coches, Fitness, Montañas, Viajes, Atardeceres.",
    about_languages: "Idiomas: Ruso (nativo), Inglés B1.",
    about_born: 'Nació en <a href="https://es.wikipedia.org/wiki/Nizhni_Taguil" target="_blank" rel="noopener noreferrer">Nizhny Taguil</a>, Rusia.',
    about_birthday: "Fecha de nacimiento: 23 de abril.",

    contact_methods_heading: "Métodos de contacto:",
    social_media_heading: "Redes sociales:",
    donates: '<a href="https://www.donationalerts.com/r/mariangel777" target="_blank" rel="noopener noreferrer"><img src="/assets/images/money.png" alt="" aria-hidden="true">Apóyame ❤</a>',
    track_heading: "Mi tema:",

    footer_copyright: "© 2026 Mariangel777. Todos los derechos reservados.",
    footer_author: 'Created by <a href="https://github.com/nickdyukov" target="_blank" rel="noopener noreferrer">NickDyukov</a>.',

    error_message: "La página que buscas no existe o ha sido movida.",
    error_home_link: "Volver al inicio"
  }
};

// === Detect user language ===
let lang = localStorage.lang || navigator.language.slice(0, 2);

// If the detected language is not supported, default to English
if (!translations[lang]) {
  lang = 'en';
}

// === Function to set language dynamically ===
function setLang(l) {
  // === Save selected language in localStorage ===
  localStorage.lang = l;

  // === Update <html lang=""> for accessibility and SEO ===
  document.documentElement.lang = l;
  
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (translations[l] && translations[l][key]) {
      el.innerHTML = translations[l][key];
    }
  });
}

document.querySelectorAll('[data-lang]').forEach(btn =>
  btn.addEventListener('click', () => setLang(btn.dataset.lang))
);

setLang(lang);