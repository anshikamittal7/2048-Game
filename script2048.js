document.body.style.backgroundImage = "url('imgbkg.webp')";

let board;
let score = 0;
const rows = 4;
const cols = 4;

const gameboard = document.querySelector('#game-board');

window.onload = function () {
    setGame();
}

function setGame() {
    board = [
        [2, 2, 4, 8],
        [2, 2, 4, 8],
        [4, 4, 8, 16],
        [4, 4, 8, 16]
    ]
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            let tile = document.createElement('div');
            tile.id = `${i.toString()}"-"${j.toString()}`;
            let num = board[i][j];
            updateTile(tile, num);
            gameboard.append(tile);
        }
    }
}

function updateTile(tile, num) {
    tile.innerTect = '';
    tile.classList.value = "";
    tile.classList.add('tile');
    if (num > 0) {
        tile.innerText = num;
        if (num <= 4096) {
            tile.classList.add(`x${num.toString()}`);
        }
        else {
            tile.classList.add("x8192");
        }
    }
}

function filterZero(row) {
    return row.filter(num => num != 0);
}

function slide(row) {
    row = filterZero(row);
    for (let i = 0; i < row.length; i++) {
        if (row[i] == row[i + 1]) {
            row[i] *= 2;
            row[i + 1] = 0;
        }
    }
    row = filterZero(row);
    while (row.length < 4) {
        row.push(0);
    }
    return row;
}


function slideLeft() {
    for (let r = 0; r < 4; r++) {
        let row = board[r];
        row = slide(row);
        for (let c = 0; i < 4; c++) {
            let tile = document.getElementById(`${r.toString()}-${c.toString()}`)
            let num = board[r][c];

            updateTile(tile, num);
        }
    }
}

document.addEventListener('keypress', (e) => {
    if (e.code == "ArrowLeft") {
        slideLeft();
    }
    // if (e.code == "ArrowRight") {
    //     slideRight();

    // }
    // if (e.code == "ArrowUp") {
    //     slideUp();

    // }
    // if (e.code == "ArrowDown") {
    //     slideDown();

    // }
})