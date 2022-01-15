const container = document.getElementById("container");
let n = 16;

for (i = 0; i< n*n; i++){
    const div = document.createElement("div");
    div.setAttribute("class", "cell");
    container.appendChild(div);
}

document.querySelectorAll("#container").forEach(() => {
    document.querySelector(".cell").addEventListener("mouseover", function() {
        document.querySelector(".cell").style.backgroundColor = "black";
    });
});
