const container = document.getElementById("container");
const cell = document.getElementById("cell");
const rstBtn = document.getElementById("resetButton")
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
        e.target.style.backgroundColor = "black"
        container.style.backgroundColor = "white"
});

rstBtn.addEventListener("click", function() {
    let newGrid = prompt("Enter the new desired grid size, with a maximum of 100 pixels", "16");
    if (!isNaN(newGrid) && newGrid <= 100 && newGrid >= 1)
        n = newGrid;
    removeGrid(container);
    drawGrid();
    container.style.setProperty('grid-template-columns', 'repeat(' + n + ', 1fr)');
}); 