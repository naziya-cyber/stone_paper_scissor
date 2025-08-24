let userScore = 0;
let compScore = 0;
// access all the choices
let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let userScorePara = document.querySelector("#user-score");
let compScorePara = document.querySelector("#comp-score");

// show the winner 
const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! your ${userChoice} beats  comp ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lose comp ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}



// 3 //  generate computer choice 
const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    //special class in js that generate rendom value 
 const randomIdx = Math.floor(Math.random()*3);
 return options[randomIdx];
}
// 4 // draw the game 
const drawGame  = () => {
    msg.innerText = "Game Draw";
    msg.style.backgroundColor = " rgba(70, 9, 84, 1)";
}



// 2// 
const playGame = (userChoice) => {
    // generate computer choice 
    const compChoice = genCompChoice();
    // console.log( "computer select ", compChoice);
    // check winner 
    if(userChoice === compChoice){
        drawGame();
    }
    else {
        let userWin = "true";
        if(userChoice === "rock"){
            userWin = compChoice === "scissors" ? true : false;
        }else if(userChoice === "paper"){
            userWin = compChoice === "rock" ? true : false;
        }else {
            // user choose scissors
            userWin = compChoice === "paper" ? true : false;
        }

        showWinner(userWin, userChoice, compChoice);    }


}

// 1 // add event listener to all the choices
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        // get the user choice 
        let userChoice = choice.getAttribute("id");
        // console.log("user choice", userChoice);
        playGame(userChoice);
    })
})


