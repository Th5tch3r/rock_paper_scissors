// Queries buttons
const buttons = document.querySelectorAll("input");

// Declare score
let playerScore = 0;
let compScore = 0;

// create a getComputerChoice function
// include an array of items for function to choose from
// use Math.random * length of array otherwise only return from 0 to 
// return the random item from array as output

function getComputerChoice() {
        let compChoice = [
                "Rock",
                "Paper",
                "Scissors"
        ]

        return compChoice[Math.floor(Math.random() * compChoice.length)];
}


// Create a disable to click on button function so that either comp or player reaches score of 5 first, wins
function disable() {
        buttons.forEach(button => {
                button.disabled = true;
        })
}


function playRound(playerSelection) {
        let computerSelection = getComputerChoice();
        let result = "";

        if (playerSelection === computerSelection) {
                result = "It's a tie " + "you both chose " + playerSelection + "<br>Harry's Score " + compScore + "<br>Your Score: " + playerScore;
        } else if (playerSelection === "Rock" && computerSelection === "Paper" ||
                playerSelection === "Paper" && computerSelection === "Scissors" ||
                playerSelection === "Scissors" && computerSelection === "Rock") {
                        compScore++;
                        result = "Harry wins! " + computerSelection + " beats " + playerSelection + "<br> Harry's Score " + compScore + "<br>Your Score: " + playerScore;

                        if ( compScore == 5 && playerScore < 5) {
                                result = "Harry has win the game!";
                                disable();
                        }
        } else {
                playerScore++;
                result = "You win! " + playerSelection + " beats " + computerSelection + "<br> Harry's Score " + compScore + "<br>Your Score: " + playerScore;
                if (playerScore == 5 && compScore < 5) {
                        result = "You have win the game!";
                        disable();
                }
        }

        document.getElementById("result").innerHTML = result;
}

// create an onclick to trigger input button type so that whenever it is click,
// playRound automatically has an argument and run
// Embedded user value from button.value using addEventListener

buttons.forEach(button => {
        button.addEventListener("click", function() {
                playRound(button.value);
        })
})

const retryButton = document.getElementById("retry");

retryButton.addEventListener("click", () => {
        window.location.reload();
})

