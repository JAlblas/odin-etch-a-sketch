const CONTAINER_WIDTH = 800;
let container = document.querySelector("#container");
let changeSizeInput = document.querySelector("#changeSizeInput");
let changeSizeButton = document.querySelector("#changeSizeButton");
let gridSize = 16;

changeSizeButton.addEventListener("click", () => {
  if (changeSizeInput.value > 100) {
    alert("Max 100 allowed");
    changeSizeInput.value = 16;
  } else {
    gridSize = changeSizeInput.value;

    createGrid();
  }
});

changeSizeInput.addEventListener("keyup", (e) => {
  if (e.which == 13) {
    if (changeSizeInput.value > 100) {
      alert("Max 100 allowed");
      changeSizeInput.value = 16;
    } else {
      gridSize = changeSizeInput.value;

      createGrid();
    }
  }
});

function createGrid() {
  container.innerHTML = "";
  for (let index = 0; index < gridSize; index++) {
    let row = document.createElement("div");
    row.classList.add("column");

    for (let j = 0; j < gridSize; j++) {
      let square = document.createElement("div");
      square.classList.add("square");

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
  let o = Math.round,
    r = Math.random,
    s = 255;
  return (
    "rgba(" + o(r() * s) + "," + o(r() * s) + "," + o(r() * s) + "," + 1 + ")"
  );
}

createGrid();
