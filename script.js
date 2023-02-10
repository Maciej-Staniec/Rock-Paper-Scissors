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
  playerHand = document.createElement("img");
  playerHand.setAttribute("src", "images/rock.png");
  playerHand.setAttribute("alt", "player-hand");
  playerHand.setAttribute("id", "player-hand");
  compHand = document.createElement("img");
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
  // get random selection for the computer
  const compSelection = options[Math.floor(Math.random() * options.length)];
  console.log("Player - " + selection);
  console.log("Computer - " + compSelection);
  // Get img selectors after the GUI has been created
  const handImages = document.querySelectorAll("img");
  console.log(handImages);
  // move up and down both hands
  for (let i = 0; i < handImages.length; i++) {
    handImages[i].setAttribute("src", "images/rock.png");
    handImages[i].classList.add("animate-img");
  }
  setTimeout(function () {
    for (let i = 0; i < handImages.length; i++) {
      handImages[i].classList.remove("animate-img");
    }
  }, 900);
  // Check who won. Call the function once animation is finished
  setTimeout(function () {
    switch (selection) {
      case "rock":
        if (compSelection == "paper") {
          compHand.setAttribute("src", " images/paper.png");
          playerLost(mainHeader);
        } else if (compSelection == "rock") {
          draw(mainHeader);
        } else {
          compHand.setAttribute("src", " images/scissors.png");
          playerWon(mainHeader);
        }
        break;
      case "paper":
        playerHand.setAttribute("src", " images/paper.png");
        if (compSelection == "paper") {
          compHand.setAttribute("src", " images/paper.png");
          draw(mainHeader);
        } else if (compSelection == "rock") {
          playerWon(mainHeader);
        } else {
          compHand.setAttribute("src", " images/scissors.png");
          playerLost(mainHeader);
        }
        break;
      case "scissors":
        playerHand.setAttribute("src", " images/scissors.png");
        if (compSelection == "paper") {
          compHand.setAttribute("src", " images/paper.png");
          playerWon(mainHeader);
        } else if (compSelection == "rock") {
          playerLost(mainHeader);
        } else {
          compHand.setAttribute("src", " images/scissors.png");
          draw(mainHeader);
        }
        break;
    }
  }, 900);
}

function playerWon(header) {
  header.textContent = "You won!";
  playerScore += 1;
  playerScoreText.textContent = playerScore;
}

function playerLost(header) {
  header.textContent = "You lost...";
  compScore += 1;
  computerScoreText.textContent = compScore;
}

function draw(header) {
  header.textContent = "It's draw.";
}
