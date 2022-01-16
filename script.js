const container = document.getElementById("container");
const cell = document.getElementById("cell");
const rstBtn = document.getElementById("resetButton")
const rainbow = document.getElementById("rainbow");
const singleColor = document.getElementById("singleColor");
let n = 16;

drawGrid();

function drawGrid(){
    for (i = 0; i< n*n; i++){
        const div = document.createElement("div");
        div.setAttribute("id", "cell");
        container.appendChild(div);
    }
}

function removeGrid(parent){
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

container.addEventListener('mouseover', e => {
        e.target.style.backgroundColor = "black";
        container.style.backgroundColor = "white";
});

rstBtn.addEventListener("click", function() {
    let newGrid = prompt("Enter the new desired grid size, with a maximum of 100 pixels", "16");
    if (!isNaN(newGrid) && newGrid <= 100 && newGrid >= 1)
        n = newGrid;
    removeGrid(container);
    drawGrid();
    container.style.setProperty('grid-template-columns', 'repeat(' + n + ', 1fr)');
}); 

rainbow.addEventListener("click", function() {
    container.addEventListener('mouseover', e => {
        let randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
        e.target.style.backgroundColor = randomColor;
        container.style.backgroundColor = "white";
    });
}); 

singleColor.addEventListener("click", function() {
    container.addEventListener('mouseover', e => {
        e.target.style.backgroundColor = colorSelected();
        container.style.backgroundColor = "white";
    });
}); 

function colorSelected (element) {
    e.target.style.backgroundColor = element.value;
}