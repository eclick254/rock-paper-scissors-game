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
    // prompt player to select Rock, Paper, or Scissors
    // store player choice in variable playerSelection
    // call function computerPlay()
    // store computerResult in variable computerSelection
    // compare playerSelection and computerSelection and store winner of the round in variable roundWinner
    // return roundWinner

    
