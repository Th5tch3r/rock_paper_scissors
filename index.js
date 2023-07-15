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

// Test to see if getComputerChoice() works
// console.log(getComputerChoice());

// Create a disable to click on button function so that either comp or player reaches score of 5 first, wins
function disable() {
        buttons.forEach(button => {
                button.disabled = true;
        })
}


// create function to play single round of rock paper scissors
// should take 2 parameters (playerSelection, computerSelection)
// create conditionals to compare the 2 arguments
// if the same then return "tie", if not then return "You win" or "You lose" based on conditions 
// count player and computer score
// declare score on global scope for global access
// Set condition so that if comp or player reaches score of 5 first then make the game done and disable buttons

function playRound(playerSelection) {
        let computerSelection = getComputerChoice();
        let result = "";

        if (playerSelection === computerSelection) {
                result = "It's a tie " + "you both chose " + playerSelection + "<br>Harry's Score " + compScore + "<br>Your Score: " + playerScore;
        } else if (playerSelection === "Rock" && computerSelection === "Paper" ||
                playerSelection === "Paper" && computerSelection === "Scissors" ||
                playerSelection === "Scissors" && computerSelection === "Rock") {
                        compScore++;
                        result = "Harry wins! " + computerSelection + "beats " + playerSelection + "<br> Harry's Score " + compScore + "<br>Your Score: " + playerScore;

                        if ( compScore == 5 && playerScore < 5) {
                                result = "Harry has win the game!";
                                disable();
                        }
        } else {
                playerScore++;
                result = "You win! " + playerSelection + "beats " + computerSelection + "<br> Harry's Score " + compScore + "<br>Your Score: " + playerScore;
                if (playerScore == 5 && compScore < 5) {
                        result = "You have win the game!";
                        disable();
                }
        }

        document.getElementById("result").innerHTML = result;
        // return;
}

// create an onclick to trigger input button type so that whenever it is click,
// playRound automatically has an argument and run
// Embedded user value from button.value using addEventListener

buttons.forEach(button => {
        button.addEventListener("click", function() {
                playRound(button.value);
        })
})

// Test to see if playRound() works
// const playerSelection = "Rock";
// const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection), computerSelection);

// create a for loop to repeat the game 5 times inside the function game
// use playRound() inside to keep count of player and comp score 

// function game() {
//         for( let i = 0; i < 5; i++) {
//                 const playerSelection = makeChoice();
//                 const computerSelection = getComputerChoice();
//                 console.log(playRound(playerSelection,computerSelection));
//                 console.log("You:" + playerScore);
//                 console.log("Harry:" + compScore);
//         }
// }

// Test to see if game() works
// console.log(game());