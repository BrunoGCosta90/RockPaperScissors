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

/*function playerChoice(){
    let playerPick = prompt("Rock, paper or scissor?", "rock");
    return playerPick.toLowerCase();
}*/

function playRound(playerSelection, computerSelection){
    const player = playerSelection;
    const computer = computerSelection;
    let result;
    
    if ((player == "rock" && computer == "rock") || (player == "scissor" && computer == "scissor") || (player == "paper" && computer == "paper")){
        //alert("Draw!");
        //return result = "Draw!";
        const score = document.querySelector('.score');
        score.textContent += "Draw!\n";
    } else if ((player == "rock" && computer == "scissor") || (player == "paper" && computer == "rock") || (player == "scissor" && computer == "paper")){
        //alert("Player won the round!");
        playerWon++;
        //return result = "Player won the round!";
        const score = document.querySelector('.score');
        score.textContent += "Player won the round!\n";
    } else {
        //alert("Computer won the round!");
        computerWon++;
        //return result = "Computer won the round!";
        const score = document.querySelector('.score');
        score.textContent += "Computer won the round!\n";
    }
    if (playerWon == 5 || computerWon == 5){
        return game();
    }
}

function game(){
    //let winner;
    /*for (let i = 0; i < 5; i++){
        console.log(playRound(playerChoice(),computerPlay()));
    }*/

    /*if (playerWon > computerWon){
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
    }*/
    const score = document.querySelector('.score');
    if (playerWon == 5){
        score.textContent += `\nPlayer beats Computer ${playerWon}-${computerWon}!\n\n`;
    } else {
        score.textContent += `\nComputer beats Player ${computerWon}-${playerWon}!\n\n`;
    };

    playerWon = 0;
    computerWon = 0;

    const btnBlock = document.querySelectorAll("button");

    for (let i = 0; i < btnBlock.length; i++){
        btnBlock[i].disabled = true;
    }

    const btnRestart = document.createElement('button');
    btnRestart.style.cssText = 'display: flex; justify-content: center; align-self: center; height: max-content; font-size: 32px; border-radius: 15%; margin: 0px 10px';
    btnRestart.textContent = "Restart game"
    btnRestart.addEventListener('click', () => {
        for (let i = 0; i < btnBlock.length; i++){
            btnBlock[i].disabled = false;
        }
        score.textContent = "";
        btnRestart.remove();
    })

    const bodySelector = document.querySelector('body');

    bodySelector.appendChild(btnRestart);
}

const btnRock = document.querySelector('.rock');
btnRock.addEventListener('click', () => {
    playRound("rock",computerPlay())
});

const btnPaper = document.querySelector('.paper');
btnPaper.addEventListener('click', () => {
    playRound("paper",computerPlay())
});

const btnScissors = document.querySelector('.scissors');
btnScissors.addEventListener('click', () => {
    playRound("scissor", computerPlay())
});