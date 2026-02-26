// Main JavaScript imports
import "/js/themes.js";
import "/js/languages.js";

// ====== Home button ======
const homeBtn = document.querySelector(".home-btn");

if (homeBtn) {
  homeBtn.addEventListener("click", () => {
    window.location.href = "/index.html";
  });
}