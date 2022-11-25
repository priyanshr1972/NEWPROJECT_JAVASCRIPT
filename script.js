the = document.querySelectorAll('[name="theme"]');
// console.log(th);
the.forEach((theme) => {
  theme.addEventListener("click", () => localStorage.setItem("theme", theme.id));
});

function app() {
  st = localStorage.getItem("theme"); 
  the.forEach((theme) => {
    if (theme.id === st) {
      theme.checked = true;
    }
  });
}
document.onload = app();