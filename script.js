// Selectors
const playerScore = document.querySelector("#player-score");
const computerScore = document.querySelector("#computer-score");
const letsPlayBtn = document.querySelector(".play-btn");
const selectBtns = document.querySelectorAll(".select-btn");
const playerHand = document.querySelector("#player-hand");
const compHand = document.querySelector("#comp-hand");

// Listeners
letsPlayBtn.addEventListener("click", startGame);
//  ### Adding listeners to play buttons ###
for (let i = 0; i < selectBtns.length; i++) {
  selectBtns[i].addEventListener("click", drawOption);
}

// Functions
function startGame() {}

function drawOption() {}
