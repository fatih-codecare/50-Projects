const search = document.querySelector(".search");
const btn = document.querySelector(".btn");
const input = document.querySelector(".input");

btn.addEventListener("mouseover", () => {
  search.classList.add("active");
  input.focus();
});

input.addEventListener("mouseover", () => {
  search.classList.toggle("active");
  input.focus();
});


// btn.addEventListener("mouseenter", function( event ) {
//   search.classList.add("p");
//   input.focus();
// }, false);