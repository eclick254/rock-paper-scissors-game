/*
Function that randomly returns either 'Rock', 'Paper' or 'Scissors'
*/
// initialize 'computerPlay' function
function computerPlay() {
    // create array of Rock Paper Scissors options and store as computerOptions 
    computerOptions = ['Rock', 'Paper', 'Scissors'];
    // randomly select a string from computerOptions and store as computerResult
    computerResult = computerOptions[Math.floor(Math.random()*computerOptions.length)];
    // return option randomly selected as computerResult
    return computerResult;
};

/*
Function that plays a single round of Rock Paper Scissors
*/
// initialize 'playRound' function that takes two arguments: playerSelection & computerSelection
function playRound(playerSelection, computerSelection) {
    // compare playerSelection and computerSelection
    if (playerSelection === "rock" && computerSelection === "Paper") {
        alert("You selected " + playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1));
        alert("Computer selected " + computerSelection);
        alert("You Lose! Paper beats Rock!!");
        // store winner of the round in variable roundWinner
        roundWinner = "Computer";
    } else if (playerSelection === "paper" && computerSelection === "Scissors") {
        alert("You selected " + playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1));
        alert("Computer selected " + computerSelection);
        alert("You Lose! Scissors beat Paper!!");
        // store winner of the round in variable roundWinner
        roundWinner = "Computer";
    } else if (playerSelection === "scissors" && computerSelection === "Rock") {
        alert("You selected " + playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1));
        alert("Computer selected " + computerSelection);
        alert("You Lose! Rock beats Scissors!!");
        // store winner of the round in variable roundWinner
        roundWinner = "Computer";
    } else if (playerSelection === "rock" && computerSelection === "Scissors") {
        alert("You selected " + playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1));
        alert("Computer selected " + computerSelection);
        alert("You Win! Rock beats Scissors!!");
        // store winner of the round in variable roundWinner
        roundWinner = "Player";
    } else if (playerSelection === "paper" && computerSelection === "Rock") {
        alert("You selected " + playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1));
        alert("Computer selected " + computerSelection);
        alert("You Win! Paper beats Rock!!");
        // store winner of the round in variable roundWinner
        roundWinner = "Player";
    } else if (playerSelection === "scissors" && computerSelection === "Paper") {
        alert("You selected " + playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1));
        alert("Computer selected " + computerSelection);
        alert("You Win! Scissors beat Paper!!");
        // store winner of the round in variable roundWinner
        roundWinner = "Player";
    } else if (playerSelection === computerSelection.toLowerCase()) {
        alert("You selected " + playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1));
        alert("Computer selected " + computerSelection);
        alert("It's a tie!");
        // store winner of the round in variable roundWinner
        roundWinner = null;
    } else {
        // condition in case player does not enter a valid Rock Paper Scissors selection
        alert("Unknown selection! \nPlease select either 'Rock', 'Paper', or 'Scissors.'");
        // store winner of the round in variable roundWinner
        roundWinner = undefined;
    }
    // return roundWinner
    return(roundWinner); 
    }

// prompt user input for player selection and store result in variable playerSelection
const playerSelection = prompt("Let's play Rock Paper Scissors. Ready...Set...Go! ").toLowerCase();
// call function computerPlay() and store result in variable computerSelection
const computerSelection = computerPlay(); 
// output playRound winner in the console   
console.log(playRound(playerSelection, computerSelection));