// console.log("hello");
// Queries buttons
const buttons = document.querySelectorAll("input");

// Create a forEach loop for the buttons 
// use .addEventListener on click to send value 
buttons.forEach(button => {
        button.addEventListener("click", function() {
               playRound(button.value)
        })
})

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

// create function to play single round of rock paper scissors
// should take 2 parameters (playerSelection, computerSelection)
// create conditionals to compare the 2 arguments
// if the same then return "tie", if not then return "You win" or "You lose" based on conditions 
// count player and computer score
// declare score on global scope for global access

let playerScore = 0;
let compScore = 0;

function playRound(playerSelection) {
        let computerSelection = getComputerChoice();
        if (playerSelection === computerSelection) {
                return ("It's a tie!")
        } else if (playerSelection === "Rock" && computerSelection === "Paper" ||
                playerSelection === "Paper" && computerSelection === "Scissors" ||
                playerSelection === "Scissors" && computerSelection === "Rock") {
                        compScore++;
                        return ("Harry wins!")
        } else {
                playerScore++;
                return ("You win!")
        }
}

// Test to see if playRound() works
// const playerSelection = "Rock";
// const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection), computerSelection);

// create a for loop to repeat the game 5 times inside the function game
// use playRound() inside to keep count of player and comp score 

function game() {
        for( let i = 0; i < 5; i++) {
                // let playerSelection = playerChoice;
                // const computerSelection = getComputerChoice();
                console.log(playRound(playerSelection))
                console.log("You:" + playerScore);
                console.log("Harry:" + compScore);
        }
}

// Test to see if game() works
console.log(game())