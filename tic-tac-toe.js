document.addEventListener("DOMContentLoaded", function() {
    const squares = document.querySelectorAll("#gameboard div");
    const statusDiv = document.getElementById('status');
    let currentPlayer = "X";
    let boardState = Array(9).fill(""); 

    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
        [0, 4, 8], [2, 4, 6]             // diagonals
    ];

    function checkWinner() {
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

        // Hover effect
        square.addEventListener("mouseenter", () => {
            if (!boardState[index]) {
                square.classList.add("hover");
            }
        });
        square.addEventListener("mouseleave", () => {
            square.classList.remove("hover");
        });

        // Click handler
        square.addEventListener("click", function() {
            if (boardState[index] === "" && !statusDiv.classList.contains('you-won')) {
                square.textContent = currentPlayer;
                square.classList.add(currentPlayer);
                boardState[index] = currentPlayer;

                if (!checkWinner()) {
                    currentPlayer = currentPlayer === "X" ? "O" : "X";
                }
            }
        });
    });
});
