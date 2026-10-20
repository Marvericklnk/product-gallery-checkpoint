// Select the button and page body.
let themeButton = document.querySelector("#theme-toggle");
let body = document.querySelector("body");

// Switch the theme when the button is clicked.
themeButton.addEventListener("click", function () {
  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    themeButton.textContent = "Switch to light mode";
    themeButton.setAttribute("aria-pressed", "true");
  } else {
    themeButton.textContent = "Switch to dark mode";
    themeButton.setAttribute("aria-pressed", "false");
  }
});
