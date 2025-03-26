🪨📜✂️ Rock Paper Scissors Game
A simple Rock-Paper-Scissors game built with JavaScript. This project follows a structured, reusable approach, making it easy to modify and extend.

📌 Features
✅ Random selection for the computer’s choice
✅ Score tracking for both player and computer
✅ Interactive UI updates
✅ Easy-to-extend functions

🚀 JavaScript Functions
1️⃣ Get a Random Choice
Returns a random item from a given list.

     function getRandomChoice(options) {
        return options[Math.floor(Math.random() * options.length)];
     }
Example usage:

     console.log(getRandomChoice(["Rock", "Paper", "Scissors"]));
2️⃣ Determine the Winner
Checks if the first choice wins against the second based on predefined rules.

js
Copy
Edit
function hasFirstChoiceWon(choice1, choice2, rules) {
    return rules.some(rule => rule[0] === choice1 && rule[1] === choice2);
}
Example usage:

js
Copy
Edit
const rules = [["Rock", "Scissors"], ["Scissors", "Paper"], ["Paper", "Rock"]];
console.log(hasFirstChoiceWon("Rock", "Scissors", rules)); // true
3️⃣ Get Round Results
Updates scores and returns the result message.

js
Copy
Edit
function getRoundOutcome(playerChoice, options, rules, scores) {
    const computerChoice = getRandomChoice(options);
    
    if (hasFirstChoiceWon(playerChoice, computerChoice, rules)) {
        scores.player++;
        return `🎉 Player wins! ${playerChoice} beats ${computerChoice}`;
    } else if (playerChoice === computerChoice) {
        return `🤝 It's a tie! Both chose ${playerChoice}`;
    } else {
        scores.computer++;
        return `💻 Computer wins! ${computerChoice} beats ${playerChoice}`;
    }
}
4️⃣ Update UI
Updates the HTML elements dynamically.


	function updateUI(elements, scores, message) {
	    elements.playerScore.innerText = scores.player;
	    elements.computerScore.innerText = scores.computer;
	    elements.resultMsg.innerText = message;
	}
5️⃣ Reset Game
Resets scores and UI.


	function resetGame(scores, elements) {
	    scores.player = 0;
	    scores.computer = 0;
	    updateUI(elements, scores, "");
	    elements.resetButton.style.display = "none";
	    elements.optionsContainer.style.display = "block";
	    elements.winnerMsg.innerText = "";
	}
6️⃣ Handle Player Choices
Attaches event listeners for player choices.
 
	function setupGame(options, elements, rules, scores) {
	    options.forEach(option => {
	        document.getElementById(`${option.toLowerCase()}-btn`).addEventListener("click", () => {
	            const result = getRoundOutcome(option, options, rules, scores);
	            updateUI(elements, scores, result);
	        });
	    });
	}
 
🎯 How to Play
1️⃣ Clone this repository:

git clone https://github.com/yourusername/rock-paper-scissors.git
cd rock-paper-scissors

2️⃣ Open index.html in your browser.

3️⃣ Click Rock, Paper, or Scissors and see the result.

4️⃣ First to 3 points wins the game!

🛠️ Customize the Game
Want to modify the game?

Change the rules in rules array.

Modify UI styles in style.css.

Add more logic for animations or sounds.

💡 Contributing
Feel free to fork this repository and submit a pull request! 🚀

🔥 Enjoy the game! 🏆

Would you like me to add screenshots, deployment instructions, or a live demo link? 😊
