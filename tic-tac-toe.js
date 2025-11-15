document.addEventListener("DOMContentLoaded", function() {
    const squares = document.querySelectorAll("#gameboard div");
    const statusDiv = document.getElementById('status');
    const newGameBtn = document.getElementById('new-game');
    
    let currentPlayer = "X";
    let boardState = Array(9).fill(""); 
    function checkWinner() {
        const winningCombinations = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], 
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6] 
        ];

        for (let combo of winningCombinations) {
            const [a, b, c] = combo;
            if (
                boardState[a] &&
                boardState[a] === boardState[b] &&
                boardState[a] === boardState[c]
            ) {
                statusDiv.textContent = `Congratulations! ${boardState[a]} is the Winner!`;
                statusDiv.classList.add('you-won');
                return true;
            }
        }
        return false;
    }
    squares.forEach((square, index) => {
        square.classList.add("square");

        square.addEventListener("click", function() {
            if (boardState[index] !== "" || statusDiv.classList.contains('you-won')) {
                return;
            }
            square.textContent = currentPlayer;
            square.classList.add(currentPlayer);
            boardState[index] = currentPlayer;

    
            if (!checkWinner()) {
                currentPlayer = currentPlayer === "X" ? "O" : "X";
                statusDiv.textContent = `Tic-Tac-Toe: Player ${currentPlayer}'s Turn`;
            }
        });
    });

    newGameBtn.addEventListener('click', function() {
        boardState.fill("");
        squares.forEach(square => {
            square.textContent = "";
            square.classList.remove("X", "O");
        });
        currentPlayer = "X";
        statusDiv.textContent = "Tic-Tac-Toe: Player X's Turn";
        statusDiv.classList.remove('you-won');
    });
});
