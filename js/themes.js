// ====== Restore saved theme or default to dark ======
const savedTheme = localStorage.getItem("theme") || "dark";
document.body.classList.add(savedTheme);

// ====== Theme switch ====== 
const themeToggle = document.querySelector(".theme-toggle");

if (themeToggle) { 
  themeToggle.addEventListener("click", () => {
    const isDark = document.body.classList.toggle("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }); 
}