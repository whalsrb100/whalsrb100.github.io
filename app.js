const DOWNLOAD_URL = "https://whalsrb100.github.io/release/recovery-intake.zip";

const dlLink = document.getElementById("download-link");
if (dlLink && DOWNLOAD_URL) {
  dlLink.href = DOWNLOAD_URL;
}

const themeToggleBtn = document.getElementById("theme-toggle");

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  if (themeToggleBtn) {
    themeToggleBtn.textContent = theme === "dark" ? "☀️ 라이트 모드" : "🌙 다크 모드";
  }
}

const savedTheme = localStorage.getItem("theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
applyTheme(savedTheme || (prefersDark ? "dark" : "light"));

if (themeToggleBtn) {
  themeToggleBtn.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme");
    const next = current === "dark" ? "light" : "dark";
    localStorage.setItem("theme", next);
    applyTheme(next);
  });
}
