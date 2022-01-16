const container = document.getElementById("container");
const cell = document.getElementById("cell");
let n = 16;

for (i = 0; i< n*n; i++){
    const div = document.createElement("div");
    div.setAttribute("id", "cell");
    container.appendChild(div);
}

container.addEventListener('mouseover', e => {
        e.target.style.backgroundColor = "black"
        container.style.backgroundColor = "white"
});

