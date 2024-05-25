const CONTAINER_WIDTH = 960;
const SQUARES_PER_SIDE = 16;
const container = document.querySelector('.container');


for (let index = 0; index < SQUARES_PER_SIDE; index++) {
    let row = document.createElement('div');
    row.classList.add('row');

    for (let j = 0; j < SQUARES_PER_SIDE; j++) {

        let square = document.createElement('div');
        square.classList.add('square');

        size = CONTAINER_WIDTH / SQUARES_PER_SIDE;

        square.style.width = `${size}px`;
        square.style.height = `${size}px`;
        row.appendChild(square);
    }

    container.appendChild(row);

}