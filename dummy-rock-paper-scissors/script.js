const options = ["Rock", "Paper","Scissors"];
const btnRock = document.getElementById("option1-btn");
const btnPaper = document.getElementById("option2-btn");
const btnScissors = document.getElementById("option3-btn");
const roundWinnerMsg = document.getElementById("round-results-msg");
const roundResultsDiv = document.getElementById("round-results");
const playerScoreSpan = document.getElementById("player-score-number");
const computerScoreSpan = document.getElementById("computer-score-number");
let playerOption;
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
}