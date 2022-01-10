function cpuRoll(){
     return Math.floor((Math.random()*3)+1);
 }

 let userScore = 0;
 let cpuScore = 0;

function gamePlay(userP, cpuP){
    const message = document.getElementById('prompt');
    const uScore = document.getElementById('player-score');
    const pScore = document.getElementById('computer-score');
    if ((userP == 'Rock' && cpuP == 1) ||
        (userP == 'Paper' && cpuP == 2) ||
        (userP == 'Scissors' && cpuP == 3)){
        message.textContent = `${userP} Draws!`;
        console.log("draw");
            return;}
    else if ((userP == "Rock" && cpuP == 3) ||
        (userP == "Paper" && cpuP == 1) ||
        (userP == "Scissors" && cpuP == 2)){
        message.textContent = `${userP} Wins!`;
        uScore.textContent =`${++userScore}`;
        console.log("win");
            return;}
    else if ((userP == "Rock" && cpuP == 2) ||
        (userP == "Paper" && cpuP == 3) ||
        (userP == "Scissors" && cpuP == 1)){
        message.textContent = `${userP} Loses!`;
        pScore.textContent =`${++cpuScore}`;
        console.log("Lose");
            return;}
}

// let roundNumber = 0;
// let userScore = 0;
// let cpuScore = 0;

// while (roundNumber <= 5){
//     console.log(`Player: ${userScore}, Computer ${cpuScore}, Round: ${roundNumber}\n`);
//     let roundResult = gamePlay(userPrompt(), computerPlay());
//     if (roundResult == "win"){
//         console.log("You Win!");
//         roundNumber++;
//         userScore++;
//     }else if (roundResult == "lose"){
//         console.log("You Lose!");
//         roundNumber++;
//         cpuScore++;
//     }else if (roundResult == "draw"){
//         console.log("Draw!");
//         roundNumber++
//     }
// }

// const rock = document.querySelector('.rock');
// rock.addEventListener('click', userChoice);

// function userChoice(e){
//     alert(`You picked ${e.srcElement.alt}`);
//     console.log(e.srcElement);
// }   
window.addEventListener('click', function(e){
    const choice = document.getElementById(`${e.target.alt}`);
     if(choice == null) return;
    choice.classList.add('selected');
    var cpuMove = cpuRoll();
    console.log(choice.alt);
    console.log(cpuMove);

    gamePlay(choice.alt, cpuMove);


    
});