const p1Btn = document.getElementById("p1Btn");
const p2Btn = document.getElementById("p2Btn");
const resetBtn = document.getElementById("resetBtn");
const scoreP1 = document.getElementById("scoreP1");
const scoreP2 = document.getElementById("scoreP2");
const playTo = document.getElementById("playTo");

// Define winning score & current scores
let winningScore = 3;
let currentSP1 = 0;
let currentSP2 = 0;
let gameOver = false;

// Update score for Player 1 until gameOver
p1Btn.addEventListener("click", function () {
    if (!gameOver) {
        currentSP1++;
        if (currentSP1 === winningScore) {
            gameOver = true;
            scoreP1.classList.add("has-text-success");
            scoreP2.classList.add("has-text-danger");
            p1Btn.disabled = true;
            p2Btn.disabled = true;
        }
        scoreP1.textContent = currentSP1;
    }
})
// Update score for Player 2 until gameOver
p2Btn.addEventListener("click", function () {
    if (!gameOver) {
        currentSP2++;
        if (currentSP2 === winningScore) {
            gameOver = true;
            scoreP2.classList.add("has-text-success");
            scoreP1.classList.add("has-text-danger");
            p1Btn.disabled = true;
            p2Btn.disabled = true;
        }
        scoreP2.textContent = currentSP2;
    }
})

// Reset score
resetBtn.addEventListener("click", reset)

// Listen for a change of the winning score
playTo.addEventListener("change", function () {
    // set winningscore to the selected value of playTo after turning it into a number
    winningScore = parseInt(this.value);
    reset();
})

// ____________________ FUNCTIONS _____________________________

// function to reset the game 
function reset() {
    currentSP1 = 0;
    scoreP1.textContent = currentSP1;
    currentSP2 = 0;
    scoreP2.textContent = currentSP2;
    gameOver = false;
    scoreP1.classList.remove("has-text-success", "has-text-danger");
    scoreP2.classList.remove("has-text-success", "has-text-danger");
    p1Btn.disabled = false;
    p2Btn.disabled = false;
}


