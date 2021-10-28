"use strict"

const boxes = document.querySelectorAll(".box");

const colors = [
  "#2a5470",
  "#657383",
  "#5e2c57",
  "#63213b",
  "#252856",
  "#253469",
  "#c9cbee",
  "#ff5b5b",
  "#fff5e6",
  "#b46b6b",
  "#ffd5c6",
  "#dd8870",
  "#f2eded",
  "#e7c676",
  "#454141",
  "#928f8f",
  "#eeeeee",
  "#ae9d9d",
  "#ce5e5e",
  "#dd8870",
  "#9a5644",
  "#f1cfcf",
  "#e4b1b1",
  "#d79191",
  "#b26e6e",
  "#6d2e2e",
  "#e7c9b8",
  "#ffffff",
  "#b2a6a1",
  "#ccad97",
];

boxes.forEach((box) => {
  setInterval(function () {
    box.style.backgroundColor = pickRandomColor(colors);
  }, 2000);
});

function pickRandomColor(colors) {

  let randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}

function highlightBox(box) {
  return box.classList.toggle("active");
}

function insertColor(box) {
  const colorBox = (box.style.backgroundColor = pickRandomColor(colors));
  return colorBox
      
}
