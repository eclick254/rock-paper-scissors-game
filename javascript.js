// Function that randomly returns either 'Rock', 'Paper' or 'Scissors'
    // initialize function: computerPlay
    function computerPlay(str) {
        // create variable array with game options 
        gameOptions = ['Rock', 'Paper', 'Scissors'];
        // randomly set 'Rock', 'Paper' or 'Scissors' as gameResult
        gameResult = gameOptions[Math.floor(Math.random()*gameOptions.length)];
        // return value of gameResult
        return gameResult;
    };

    

    
