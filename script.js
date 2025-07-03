let tiles = document.querySelectorAll(".tile");
let box = document.querySelector(".box")

let turn = 0;
let gameOver = false;

tiles.forEach((tile,idx)=>{
    tile.addEventListener("click",()=>{
        if (tile.id === '' && !gameOver) {
            if (turn === 0) {
                tile.id = "X";
                tile.innerHTML = '<i class="fa-solid fa-xmark"></i>';
                turn = 1;
            } else {
                tile.id = "0";
                tile.innerHTML = '<i class="fa-solid fa-0"></i>';
                turn = 0;
            }
            win();
        }
    });
});


    const winCombos = [
    [0,1,2], [3,4,5], [6,7,8], // rows
    [0,3,6], [1,4,7], [2,5,8], // columns
    [0,4,8], [2,4,6]           // diagonals
];

const win = () => {
    for (let combo of winCombos) {
        const [a, b, c] = combo;
        if (
            tiles[a].id !== '' &&
            tiles[a].id === tiles[b].id &&
            tiles[a].id === tiles[c].id
        ) {
            setTimeout(()=>{box.innerHTML = `You Won ${tiles[a].id}`;},900)
            gameOver = true;
            return;
        } 
    }
let filled = 0;

for (let i = 0; i < tiles.length; i++) {
    if (tiles[i].id !== '') {
        filled++;
    }
}

if (!gameOver && filled === 9) {
    box.innerHTML = "It's a Draw!";
    gameOver = true;
}

};