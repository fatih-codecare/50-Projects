const bgImage = document.querySelector(".bg-image");
const loadText = document.querySelector(".loading-text");

let load = 0;
let int = setInterval(blurring, 20);

function blurring() {
  load++;
  if (load > 99) {
    clearInterval(int);
  }

  loadText.innerText = load + "%";
  loadText.style.opacity = scale(load, 0, 100, 1, 0);
  bgImage.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px`;
}

const scale = (num, inp_min, inp_max, out_min, out_max) =>
  ((num - inp_min) * (out_max - out_min)) / (inp_max - inp_min) + out_min;
