let playerWon = 0;
let computerWon = 0;

function computerPlay(){
    let randomPick = Math.floor(Math.random()*3);
    switch (randomPick){
      case 0 :
          randomPick = "rock";
          break;
      case 1 :
          randomPick = "paper";
          break;
      case 2 :
          randomPick = "scissor";
          break;
      default :
          randomPick = "paper"; 
    }
    return randomPick;
}

function playerChoice(){
    let playerPick = prompt("Rock, paper or scissor?", "rock");
    return playerPick.toLowerCase();
}

function playRound(playerSelection, computerSelection){
    const player = playerSelection;
    const computer = computerSelection;
    let result;

    if ((player == "rock" && computer == "rock") || (player == "scissor" && computer == "scissor") || (player == "paper" && computer == "paper")){
        //alert("Draw!");
        return result = "Draw!";
    } else if ((player == "rock" && computer == "scissor") || (player == "paper" && computer == "rock") || (player == "scissor" && computer == "paper")){
        //alert("Player won the round!");
        playerWon++;
        return result = "Player won the round!";
    } else {
        //alert("Computer won the round!");
        computerWon++;
        return result = "Computer won the round!";
    }

}

function game(){
    let winner;
    for (let i = 0; i < 5; i++){
        console.log(playRound(playerChoice(),computerPlay()));
    }

    if (playerWon > computerWon){
        playerWon = 0;
        computerWon = 0;
        return winner = "Player won the game against the computer!";
    } else if (playerWon < computerWon){
        playerWon = 0;
        computerWon = 0;
        return winner = "Computer won the game against the player!";
    } else {
        playerWon = 0;
        computerWon = 0;
        return winner = "It's a draw! No winner!";
    }
}