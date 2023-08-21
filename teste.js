const body = document.querySelector("body");
const header1 = document.createElement("h1");
header1.innerText = "Etch-a-Sketch";
body.appendChild(header1);

const pageWrapper = document.createElement("div");
pageWrapper.classList.add("pageWrapper");
body.appendChild(pageWrapper);


const container = document.createElement("div");
container.classList.add("container");
pageWrapper.appendChild(container);



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




let mousedownID = -1;  //Global ID of mouse down interval
let counter = 0;


function mousedown() {
  if(mousedownID == -1)  //Prevent multimple loops!
     mousedownID = setInterval(whilemousedown, 100 /*execute every 100ms*/);
}


function mouseup() {
   if(mousedownID != -1) {  //Only stop if exists
     clearInterval(mousedownID);
     mousedownID = -1;
   }

}

let squares = document.querySelectorAll(".cell");


function whilemousedown() {
  document.getElementById("testdiv").innerText = counter++;
  
  
  squares.forEach((square) => {
    square.addEventListener("mousedown", () => {
      mousedown();
      square.style.backgroundColor = "black";
      mouseup();
    })
  })
}


//Assign events
document.addEventListener("mousedown", mousedown);
document.addEventListener("mouseup", mouseup);
//Also clear the interval when user leaves the window with mouse
document.addEventListener("mouseout", mouseup);

