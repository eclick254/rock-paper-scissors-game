/*
Function that randomly returns either 'Rock', 'Paper' or 'Scissors'
*/
    // initialize function; computerPlay
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
    // initialize function; singleRoundPlay that takes two arguments: playerSelection & computerSelection
    function singleRoundPlay(playerSelection, computerSelection) {
        // prompt player to select Rock, Paper, or Scissors
        // store player choice in variable playerSelection
        playerSelection = prompt("Let's play Rock Paper Scissors. 1..2..3 Go! ").toLowerCase();
        // call function computerPlay()
        // store computerResult in variable computerSelection
        computerSelection = computerPlay();
        // compare playerSelection and computerSelection and store winner of the round in variable roundWinner
        if (playerSelection === "rock" && computerSelection === "Paper") {
            alert("You selected " + playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1));
            alert("Computer selected " + computerSelection);
            alert("You Lose! Paper beats Rock!!");
            roundWinner = "Computer";
        } else if (playerSelection === "paper" && computerSelection === "Scissors") {
            alert("You selected " + playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1));
            alert("Computer selected " + computerSelection);
            alert("You Lose! Scissors beat Paper!!");
            roundWinner = "Computer";
        } else if (playerSelection === "scissors" && computerSelection === "Rock") {
            alert("You selected " + playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1));
            alert("Computer selected " + computerSelection);
            alert("You Lose! Rock beats Scissors!!");
            roundWinner = "Computer";
        } else if (playerSelection === "rock" && computerSelection === "Scissors") {
            alert("You selected " + playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1));
            alert("Computer selected " + computerSelection);
            alert("You Win! Rock beats Scissors!!");
            roundWinner = "Player";
        } else if (playerSelection === "paper" && computerSelection === "Rock") {
            alert("You selected " + playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1));
            alert("Computer selected " + computerSelection);
            alert("You Win! Paper beats Rock!!");
            roundWinner = "Player";
        } else if (playerSelection === "scissors" && computerSelection === "Paper") {
            alert("You selected " + playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1));
            alert("Computer selected " + computerSelection);
            alert("You Win! Scissors beat Paper!!");
            roundWinner = "Player";
        } else if (playerSelection === computerSelection.toLowerCase()) {
            alert("You selected " + playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1));
            alert("Computer selected " + computerSelection);
            alert("It's a tie!");
            roundWinner = null;
        } else {
            alert("Unknown selection! \nPlease select either 'Rock', 'Paper', or 'Scissors.'");
            roundWinner = undefined;
        }
        // return roundWinner
        return(roundWinner); 
        }
