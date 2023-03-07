const body = document.querySelector("body");
const pageWrapper = document.createElement("div");
pageWrapper.classList.add("pageWrapper");
body.appendChild(pageWrapper);

const container = document.createElement("div");
container.classList.add("container");
pageWrapper.appendChild(container);

const header1 = document.createElement("h1");
pageWrapper.appendChild(header1);
header1.innerText = "Etch-a-Sketch";

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

squares.forEach((square) => {
  square.addEventListener("mouseover", () => {
    square.style.backgroundColor = "black";
  })
})