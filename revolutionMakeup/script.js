/* */

const boxes = document.querySelectorAll(".box");

boxes.forEach((box) => {
  box.addEventListener("click", function () {
    // removeColor(box);
    highlightBox(box);
    if (box.classList.contains("active")) {
      insertColor(box)
      // colorMover(box, 2)
      
      
    } else {
      return (box.style.backgroundColor = "#fff");
    }setTimeout(insertColor(box), 100);
  });
  
});


function pickRandomColor() {
  const colors = [
    "#4e366d",
    "#5e2c57",
    "#63213b",
    "#252856",
    "#253469",
    "#c9cbee",
    "#ff5b5b",
    "	#fff5e6",
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
    "	#b26e6e",
    "#6d2e2e",
    "#e7c9b8",
    "#ffffff",
    "#b2a6a1",
    "#ccad97",
  ];

  let randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}

function highlightBox(box) {
  return box.classList.toggle("active");
}


function insertColor(box) {
  const colorBox = (box.style.backgroundColor = pickRandomColor(box));
  return colorBox
      
}


function resetColor(box) {
  const colorBox = (box.style.backgroundColor = "#fff");
    return colorBox;  
}

