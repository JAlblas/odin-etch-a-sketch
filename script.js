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

            square.addEventListener("mouseenter", (e) => {
                e.target.style.backgroundColor = "#000";
            });
            row.appendChild(square);
        }

        container.appendChild(row);

    }
}

createGrid();