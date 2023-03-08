const body = document.querySelector("body");
const header1 = document.createElement("h1");
header1.innerText = "Etch-a-Sketch";
body.appendChild(header1);

const pageWrapper = document.createElement("div");
pageWrapper.classList.add("pageWrapper");
body.appendChild(pageWrapper);


const buttonContainer = document.createElement("div");
buttonContainer.classList.add("buttonContainer");
pageWrapper.appendChild(buttonContainer);

const resetButton = document.createElement("button");
resetButton.classList.add("reset");
resetButton.innerText = "Reset";
buttonContainer.appendChild(resetButton);

const switchButton = document.querySelector(".switch");
buttonContainer.appendChild(switchButton);

resetButton.addEventListener("click", () => {
  window.location.reload();
})

const container = document.createElement("div");
container.classList.add("container");
pageWrapper.appendChild(container);

const gridSlider = document.querySelector(".gridSliderContainer");
pageWrapper.appendChild(gridSlider);

let divRow;
let cell;


function makeGrid(rows, columns) {
  for (let i = 0; i < rows; i++) {
    divRow = document.createElement("div");
    divRow.classList.add("row");
    container.appendChild(divRow);
    for (let j = 0; j < columns; j++) {
      cell = document.createElement("div");
      divRow.appendChild(cell);
      cell.classList.add("cell");
    }
  }
}


makeGrid(50, 50);

let rows = document.querySelectorAll(".row");
let squares = document.querySelectorAll(".cell");
let checkButton = document.querySelector(".slider");
const switchContainer = document.querySelector(".switchContainer");
buttonContainer.appendChild(switchContainer);


function rgbGrid(squareColor) {
  let randomNumber = Math.random();
    if (randomNumber <= 0.333) {
      return squareColor.style.backgroundColor = "red";
    }
    else if (randomNumber > 0.333 && randomNumber <= 0.666) {
      return squareColor.style.backgroundColor = "green";
    }
    else {
      return squareColor.style.backgroundColor = "blue";
    }
}

const vsf = 1;

function paintGrid() {
  squares.forEach((square) => {
      square.addEventListener("mousemove", (e) => {
        if (e.shiftKey) {
          if (vsf == 1) {
            rgbGrid(square);
          }
          else {
          square.style.backgroundColor = "black";
          }
        }
      })
  })
}

paintGrid();
