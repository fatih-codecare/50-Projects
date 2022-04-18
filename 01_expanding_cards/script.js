const panels = document.querySelectorAll(".panel");

panels.forEach((item, index) => {
  item.addEventListener("click", () => {
    removeActiveClasses();
    item.classList.add("active");
  });
});

function removeActiveClasses() {
  panels.forEach((item) => {
    item.classList.remove("active");
  });
  console.log("a")
}
