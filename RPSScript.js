
function computerPlay(){
    let randomPick = Math.floor(Math.random()*3);
    switch (randomPick){
      case 0 :
          randomPick = "Rock";
          break;
      case 1 :
          randomPick = "Paper";
          break;
      case 2 :
          randomPick = "Scissors";
          break;
      default :
         randomPick = "Paper"; 
    }
    return randomPick;
}

function playerChoice(){
    let playerPick = prompt("Rock, paper or scissor?", "Rock");
    return playerPick;
}

function playRound(playerSelection, computerSelection){
    const player = playerSelection;
    const computer = computerSelection;

    if ((player == "Rock" && computer == "Rock") || (player == "Scissor" && computer == "Scissor") || (player == "Paper" && computer == "Paper")){
        alert("Draw!");
    } else if ((player == "Rock" && computer == "Scissor") || (player == "Paper" && computer == "Rock") || (player == "Scissor" && computer == "Paper")){
        alert("Player won the round!");
    } else {
        alert("Computer won the round!");
    }

}