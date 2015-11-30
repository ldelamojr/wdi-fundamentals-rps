////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return move || getInput();
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
//console.log(computerMove);
//console.log(playerMove);

//playerMove === computerMove;
    if (playerMove === computerMove) {
      winner = 'tie';
    } else if (playerMove === 'rock') {
        switch (computerMove) {
          case 'paper':
            winner = 'computer';
            break;
          case 'scissors':
            winner = 'player';
            break;
      }
    } else if (playerMove === 'paper') {
        switch (computerMove) {
          case 'rock':
            winner = 'player';
            break;
          case 'scissors':
            winner = 'computer';
            break;

      }
    } else if (playerMove === 'scissors' ) {
        switch (computerMove) {
          case 'rock':
            winner = 'computer';
            break;
          case 'paper':
            winner = 'player';
            break;
        }
    }

    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    while (playerWins < 5 && computerWins < 5) {
      //getInput();
      //randomPlay();
      var playerMove = getPlayerMove();
      var computerMove = getComputerMove();
      getWinner(getPlayerMove,getComputerMove);
      console.log('     Player chose ' + playerMove + ' while Computer chose ' + computerMove)
      
      if (getWinner(playerMove,computerMove) === 'player' || getWinner(playerMove,computerMove) === 'computer') {
          console.log('     '+getWinner(playerMove,computerMove) + " won!");
      } else {
          console.log('     Tie, try again');
      }
      

      if (getWinner(playerMove,computerMove) === 'player') {
        playerWins += 1;
      } else if (getWinner(playerMove,computerMove) === 'computer'){
      computerWins +=1;
      }

      console.log('     The score is currently ' + playerWins + 'to' + computerWins);
    }
    return [playerWins, computerWins];
}

// getWinner(getPlayerMove(), getComputerMove());
playToFive();
//randomPlay();
//getComputerMove();
//getInput()
//getPlayerMove()