document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".btn");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const counter = button.previousElementSibling;
      counter.textContent = parseInt(counter.textContent) + 1;
    });
  });
});
