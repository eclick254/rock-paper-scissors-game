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



    
