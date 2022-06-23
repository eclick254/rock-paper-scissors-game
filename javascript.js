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
        playerSelection = prompt("Let's play Rock Paper Scissors. 1..2..3 Go! ");
        // call function computerPlay()
        // store computerResult in variable computerSelection
        computerSelection = computerPlay();
        // compare playerSelection and computerSelection and store winner of the round in variable roundWinner
        if (playerSelection === "Rock" && computerSelection === "Paper") {
            alert("Computer selected " + computerSelection);
            alert("You Lose! Paper beats Rock!!");
            roundWinner = "Computer";
        } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
            alert("Computer selected " + computerSelection);
            alert("You Lose! Scissors beat Paper!!");
            roundWinner = "Computer";
        } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
            alert("Computer selected " + computerSelection);
            alert("You Lose! Rock beats Scissors!!");
            roundWinner = "Computer";
        } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
            alert("Computer selected " + computerSelection);
            alert("You Win! Rock beats Scissors!!");
            roundWinner = "Player";
        } else if (playerSelection === "Paper" && computerSelection === "Rock") {
            alert("Computer selected " + computerSelection);
            alert("You Win! Paper beats Rock!!");
            roundWinner = "Player";
        } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
            alert("Computer selected " + computerSelection);
            alert("You Win! Scissors beat Paper!!");
            roundWinner = "Player";
        } else {
            alert("Computer selected " + computerSelection);
            alert("It's a tie!");
            roundWinner = null;
        }
        // return roundWinner
        return(roundWinner); 
        }

    
