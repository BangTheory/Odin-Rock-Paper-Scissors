function computerPlay(){
    return Math.floor((Math.random()*3)+1);
}

function userPrompt(){
    return prompt("Choose (r)ock, (p)aper, or (s)cissors");
}

function gamePlay(userP, cpuP){
    if ((userP == 'r' && cpuP == 1) ||
        (userP == 'p' && cpuP == 2) ||
        (userP == 's' && cpuP == 3))
            return "draw";
    else if ((userP == "r" && cpuP == 3) ||
        (userP == "p" && cpuP == 1) ||
        (userP == "s" && cpuP == 2))
            return "win";
    else if ((userP == "r" && cpuP == 2) ||
        (userP == "p" && cpuP == 3) ||
        (userP == "s" && cpuP == 1))
            return "lose";
}

let roundNumber = 0;
let userScore = 0;
let cpuScore = 0;

while (roundNumber <= 5){
    console.log(`Player: ${userScore}, Computer ${cpuScore}, Round: ${roundNumber}\n`);
    let roundResult = gamePlay(userPrompt(), computerPlay());
    if (roundResult == "win"){
        console.log("You Win!");
        roundNumber++;
        userScore++;
    }else if (roundResult == "lose"){
        console.log("You Lose!");
        roundNumber++;
        cpuScore++;
    }else if (roundResult == "draw"){
        console.log("Draw!");
        roundNumber++
    }
}
