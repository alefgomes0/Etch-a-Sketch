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


const inputSlider = document.querySelector(".gridRange");
inputSlider.addEventListener("mouseup", () => {
  const idk = parseInt(document.querySelector("#rangeValue").innerText);
  sessionStorage.setItem("row", idk); 
  window.location.reload();
})

if (sessionStorage.getItem("row") == null) {
  makeGrid(50, 50);
}
else {
  makeGrid(sessionStorage.getItem("row"), sessionStorage.getItem("row"));
}


document.querySelector("#rangeValue").innerText = sessionStorage.getItem("row");


let rows = document.querySelectorAll(".row");
let squares = document.querySelectorAll(".cell");
const switchContainer = document.querySelector(".switchContainer");
buttonContainer.appendChild(switchContainer);


/*const footer = document.createElement("div");
footer.classList.add("footer");
body.appendChild(footer);
const h4 = document.createElement("h4");
footer.appendChild(h4);
h4.innerText = "Alexandre Gomes";*/



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


const checkButton = document.querySelector(".slider");
checkButton.addEventListener("click", () => {
  if (!checkButton.classList.contains("rgbOn")) {
    checkButton.classList.add("rgbOn");
  }
  else {
    checkButton.classList.remove("rgbOn");
  }
})


const showGridOn = document.querySelector(".showGridOn");
const showGridOff = document.querySelector(".showGridOff");
squares.forEach((square) => {
  showGridOn.addEventListener("click", () => {
    container.style.backgroundColor = "#2FD09E";
    square.style.border = "1px solid black";
  })
  showGridOff.addEventListener("click", () => {
    container.style.backgroundColor = "white";
    square.style.border = "none";
  })
})





function paintGrid() {
  squares.forEach((square) => {
    container.addEventListener("mousedown", () => {
        square.addEventListener("mousemove", () => {
          if (checkButton.classList.contains("rgbOn")) {
            rgbGrid(square);
          }
          else {
          square.style.backgroundColor = "black";
          }
        })
    });
  });
}

paintGrid();


function rangeSlide(value) {
  document.getElementById("rangeValue").innerText = value;
}

function oie() {
  if (sessionStorage.getItem("row") == null) return 50;
  return sessionStorage.getItem("row");
}