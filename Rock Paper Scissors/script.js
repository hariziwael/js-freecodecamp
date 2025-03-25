function getRandomComputerResult() {
    const options = ["حجرة", "ورقة", "مقص"];
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
  }
  
  function hasPlayerWonTheRound(player, computer) {
    return (
      (player === "حجرة" && computer === "مقص") ||
      (player === "مقص" && computer === "ورقة") ||
      (player === "ورقة" && computer === "حجرة")
    );
  }
  
  let playerScore = 0;
  let computerScore = 0;
  
  function getRoundResults(userOption) {
    const computerResult = getRandomComputerResult();
  
    if (hasPlayerWonTheRound(userOption, computerResult)) {
      playerScore++;
      return `اللاعب يفوز! ${userOption} فاز على ${computerResult}`;
    } else if (computerResult === userOption) {
      return `إنه تعادل! كلاهما اختار ${userOption}`;
    } else {
      computerScore++;
      return `الكمبيوتر يفوز! ${computerResult} فاز على ${userOption}`;
    }
  }
  
  const playerScoreSpanElement = document.getElementById("player-score");
  const computerScoreSpanElement = document.getElementById("computer-score");
  const roundResultsMsg = document.getElementById("results-msg");
  const winnerMsgElement = document.getElementById("winner-msg");
  const optionsContainer = document.querySelector(".options-container");
  const resetGameBtn = document.getElementById("reset-game-btn");
  
  function showResults(userOption) {
    roundResultsMsg.innerText = getRoundResults(userOption);
    computerScoreSpanElement.innerText = computerScore;
    playerScoreSpanElement.innerText = playerScore;
  
    if (playerScore === 3 || computerScore === 3) {
      winnerMsgElement.innerText = `${
        playerScore === 3 ? "Player" : "Computer"
      } قد فاز باللعبة!`;
  
      resetGameBtn.style.display = "block";
      optionsContainer.style.display = "none";
    }
  
  };
  function resetGame() {
    playerScore =0;
    computerScore =0;
    playerScoreSpanElement.innerText = playerScore;
    computerScoreSpanElement.innerText = computerScore;
    resetGameBtn.style.display="none";
    optionsContainer.style.display = "block";
    winnerMsgElement.innerText = "";
    roundResultsMsg.innerText = "";
  
  
  };
  resetGameBtn.addEventListener("click", resetGame);

  const rockBtn = document.getElementById("rock-btn");
  const paperBtn = document.getElementById("paper-btn");
  const scissorsBtn = document.getElementById("scissors-btn");
  
  rockBtn.addEventListener("click", function () {
    showResults("حجرة");
  });
  
  paperBtn.addEventListener("click", function () {
    showResults("ورقة");
  });
  
  scissorsBtn.addEventListener("click", function () {
    showResults("مقص");
  });