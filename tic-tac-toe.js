document.addEventListener("DOMContentLoaded", function() {
    const squares = document.querySelectorAll("#gameboard div");
    let currentPlayer = "X"; y
    let boardState = Array(9).fill(""); 

    squares.forEach((square, index) => {
        square.classList.add("square");
        square.addEventListener("click", function() {
    
            if (boardState[index] === "") {
                square.textContent = currentPlayer;
                square.classList.add(currentPlayer);

                boardState[index] = currentPlayer;

                currentPlayer = currentPlayer === "X" ? "O" : "X";
            }
        });
    });
});
