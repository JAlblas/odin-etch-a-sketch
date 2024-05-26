const CONTAINER_WIDTH = 960;
const container = document.querySelector('.container');
const changeSizeInput = document.querySelector('#changeSizeInput');
const changeSizeButton = document.querySelector('#changeSizeButton');
let gridSize = 16;


changeSizeButton.addEventListener("click", () => {
    gridSize = changeSizeInput.value;
    console.log("Changing settings");

    createGrid();
})

function createGrid() {
    container.innerHTML = "";
    for (let index = 0; index < gridSize; index++) {
        let row = document.createElement('div');
        row.classList.add('row');

        for (let j = 0; j < gridSize; j++) {

            let square = document.createElement('div');
            square.classList.add('square');

            size = CONTAINER_WIDTH / gridSize;

            square.style.width = `${size}px`;
            square.style.height = `${size}px`;
            square.style.backgroundColor = "#FFF";
            square.style.opacity = 0;

            square.addEventListener("mouseenter", (e) => {
                if (e.target.style.opacity == 0) {
                    e.target.style.backgroundColor = random_rgba();
                    e.target.style.opacity = 0.1;
                } else {
                    e.target.style.opacity = parseFloat(e.target.style.opacity) + 0.1;
                }

            });
            row.appendChild(square);
        }

        container.appendChild(row);

    }
}

function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s) + ',' + 1 + ')';
}

createGrid();