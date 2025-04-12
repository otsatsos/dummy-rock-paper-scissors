const options = ["Rock", "Paper","Scissors"];
const playerScoreSpan = document.getElementById("player-score-number");
const computerScoreSpan = document.getElementById("computer-score-number");
const btnRock = document.getElementById("option1-btn");
const btnPaper = document.getElementById("option2-btn");
const btnScissors = document.getElementById("option3-btn");
const roundWinnerMsg = document.getElementById("round-results-msg");
const roundResultsDiv = document.getElementById("round-results");
const gameWinnerDiv = document.getElementById("game-results")
const gameWinnerMsg = document.getElementById("game-results-msg");
const optionsDiv = document.getElementById("options");
const btnReset = document.getElementById("reset-button");
let playerScore=0;
let computerScore=0;



btnRock.addEventListener("click", function() {
    roundResults("Rock");
});

btnPaper.addEventListener("click", function() {
    roundResults("Paper");
});

btnScissors.addEventListener("click", function() {
    roundResults("Scissors");
});

btnReset.addEventListener("click",resetGame);

function computerOption(){
    return options[Math.floor(Math.random()*options.length)];
}

function roundResults(player){
    let computer = computerOption();
    if((player==="Rock" && computer==="Scissors") || (player==="Paper" && computer==="Rock") || (player==="Scissors" && computer==="Paper")){
        playerScore++;
        roundWinnerMsg.innerText=`Player wins! ${player} beats ${computer}.`
    } else if(player===computer){
        roundWinnerMsg.innerText="It's a tie!";
    } else {
        computerScore++;
        roundWinnerMsg.innerText=`Computer wins! ${computer} beats ${player}.`
    } 
    playerScoreSpan.innerText=playerScore;
    computerScoreSpan.innerText=computerScore;
    gameWin(playerScore,computerScore);
}

function gameWin(player,computer){
    let win=false;
    if(player>2){
        gameWinnerMsg.innerText="Player wins the game!";
        win=true;
    } else if (computer>2){
        gameWinnerMsg.innerText="Computer wins the game!";
        win=true;
    }
    if(win){
        gameWinnerDiv.style.display="block";
        optionsDiv.style.display="none";
        btnReset.style.display="block";
    }
}

function resetGame(){
    gameWinnerDiv.style.display="none";
    optionsDiv.style.display="block";
    btnReset.style.display="none";
    playerScore=0;
    computerScore=0;
    playerScoreSpan.innerText=playerScore;
    computerScoreSpan.innerText=computerScore;
    roundWinnerMsg.innerText="";
}