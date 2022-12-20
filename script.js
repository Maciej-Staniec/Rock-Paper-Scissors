// Selectors
const playerScoreText = document.querySelector("#player-score");
const computerScoreText = document.querySelector("#computer-score");
const letsPlayBtn = document.querySelector(".play-btn");
// const playerHand = document.querySelector("#player-hand");
// const compHand = document.querySelector("#comp-hand");
const mainContainer = document.querySelector(".main-container");

// Listeners
letsPlayBtn.addEventListener("click", startGame);

//
playerScore = 0;
compScore = 0;
// Functions
function startGame() {
  // Remove intro-container once button clicked
  document.querySelector(".intro-container").remove();

  // Create game GUI

  // Create 'Choose an option' header
  const header = document.createElement("h1");
  header.classList.add("main-heading");
  header.textContent = "Choose an option";
  // append it to the 'selection-container'
  mainContainer.appendChild(header);

  // Create a container for hand images
  const handContainer = document.createElement("div");
  handContainer.classList.add("hand-container");
  mainContainer.appendChild(handContainer);
  // Create players' hand images and append them to the 'hand-container' div.
  const playerHand = document.createElement("img");
  playerHand.setAttribute("src", "images/rock.png");
  playerHand.setAttribute("alt", "player-hand");
  playerHand.setAttribute("id", "player-hand");
  const compHand = document.createElement("img");
  compHand.setAttribute("src", "images/rock.png");
  compHand.setAttribute("alt", "comp-hand");
  compHand.setAttribute("id", "comp-hand");

  handContainer.append(playerHand, compHand);

  // Create buttons' div container
  const btnsContainer = document.createElement("div");
  btnsContainer.classList.add("btns-container");
  // Append the div to the main-container
  mainContainer.append(btnsContainer);

  // Create selection buttons
  const rockBtn = document.createElement("button");
  rockBtn.classList.add("select-btn");
  rockBtn.setAttribute("id", "rock");
  rockBtn.textContent = "rock";
  const paperBtn = document.createElement("button");
  paperBtn.classList.add("select-btn");
  paperBtn.setAttribute("id", "paper");
  paperBtn.textContent = "paper";
  const scissorsBtn = document.createElement("button");
  scissorsBtn.classList.add("select-btn");
  scissorsBtn.setAttribute("id", "scissors");
  scissorsBtn.textContent = "scissors";
  // Append buttons to the buttons div container
  btnsContainer.append(rockBtn, paperBtn, scissorsBtn);

  // Get all created buttons to add listeners
  const allBtns = document.querySelectorAll(".select-btn");

  // Add listeners to the selection buttons
  for (let i = 0; i < allBtns.length; i++) {
    allBtns[i].addEventListener("click", drawOption);
  }
}

function drawOption(event) {
  const options = ["rock", "paper", "scissors"];
  const mainHeader = document.querySelector(".main-heading");
  const selection = event.target.textContent;
  const compSelection = options[Math.floor(Math.random() * options.length)];
  console.log("Player - " + selection);
  console.log("Computer - " + compSelection);
  for (let i = 0; i < 3; i++){
    
  }
  setTimeout(function () {
    switch (selection) {
      case "rock":
        if (compSelection == "paper") {
          mainHeader.textContent = "You lost...";
          compScore += 1;
          computerScoreText.textContent = compScore;
        } else if (compSelection == "rock") {
          mainHeader.textContent = "It's draw.";
        } else {
          mainHeader.textContent = "You won!";
          playerScore += 1;
          playerScoreText.textContent = playerScore;
        }
        break;
      case "paper":
        if (compSelection == "paper") {
          mainHeader.textContent = "It's draw.";
        } else if (compSelection == "rock") {
          mainHeader.textContent = "You won!";
          playerScore += 1;
          playerScoreText.textContent = playerScore;
        } else {
          mainHeader.textContent = "You lost...";
          compScore += 1;
          computerScoreText.textContent = compScore;
        }
        break;
      case "scissors":
        if (compSelection == "paper") {
          mainHeader.textContent = "You won!";
          playerScore += 1;
          playerScoreText.textContent = playerScore;
        } else if (compSelection == "rock") {
          mainHeader.textContent = "You lost...";
          compScore += 1;
          computerScoreText.textContent = compScore;
        } else {
          mainHeader.textContent = "It's draw.";
        }
        break;
    }
  }, 3000);
}
