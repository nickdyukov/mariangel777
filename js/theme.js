// ====== Theme switch ======
const themeToggle = document.querySelector(".themeToggle");

// === Restore saved theme or default to dark ===
const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
  if (savedTheme === "dark") {
    document.body.classList.add("dark");
  }
} else {
  document.body.classList.add("dark");
  localStorage.setItem("theme", "dark");
}

// === Toggle theme ===
if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    localStorage.setItem(
      "theme",
      document.body.classList.contains("dark") ? "dark" : "light"
    );
  });
}