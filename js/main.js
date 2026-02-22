import "/js/theme.js";
import "/js/lang.js";

// ====== Button ======
const HomeBtn = document.querySelector(".HomeBtn");

if (HomeBtn) {
  HomeBtn.addEventListener("click", () => {
    window.location.href = "/index.html";
  });
}