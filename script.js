const container = document.getElementById("container");
const cell = document.getElementById("cell");
const demo = document.getElementById("dimensions");
const rainbow = document.getElementById("rainbow");
const singleColor = document.getElementById("singleColor");
const slider = document.getElementById("myRange");
const slideContainer = document.getElementById("slidecontainer");
const eraser = document.getElementById("eraser");

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

rainbow.addEventListener("click", function() {
    container.addEventListener('mouseover', e => {
        let randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
        e.target.style.backgroundColor = randomColor;
        container.style.backgroundColor = "white";
    });
}); 

function test(t) {
    singleColor.addEventListener("click", function() {
        container.addEventListener('mouseover', e => {
            e.target.style.backgroundColor = t.value;
            container.style.backgroundColor = "white";
        });
    }); 
}

eraser.addEventListener("click", function() {
    container.addEventListener('mouseover', e => {
        e.target.style.backgroundColor = "white";
        container.style.backgroundColor = "white";
    });
}); 


slider.addEventListener("mouseup", function() {
    n = slider.value;
    removeGrid(container);
    drawGrid();
    container.style.setProperty('grid-template-columns', 'repeat(' + n + ', 1fr)');
    demo.textContent = "Dimensions: " + n + "px x "+ n + "px";
    slideContainer.appendChild(demo);
}); 