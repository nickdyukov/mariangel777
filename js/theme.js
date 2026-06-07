// ========== Theme Management ==========
// ===== Restore saved theme or default to dark =====
const savedTheme = localStorage.getItem("theme") || "dark";
document.body.classList.add(savedTheme);

const themeToggle = document.querySelector(".header__buttons-theme-toggle");

if (themeToggle) {
themeToggle.addEventListener("click", () => {
  const isDark = document.body.classList.contains("dark");

  document.body.classList.remove("dark", "light");
  document.body.classList.add(isDark ? "light" : "dark");

  localStorage.setItem("theme", isDark ? "light" : "dark");
});
}