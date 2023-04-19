let userInput = parseInt(prompt("How many rounds do you want to play?"))

let youWin = 0;
let youLost = 0;
let itsATie = 0;

for  (let i = 0; i < userInput; i++) {
    let userChoice = prompt("Choose rock, paper, or scissors. (enter r, p, or s)");   
    let randomNumber = Math.floor(Math.random() * 3);

    console.log(randomNumber);
    
    let computerChoice;
    
    if(randomNumber == 0) {
        computerChoice = "s"
    } else if(randomNumber == 1) {
        computerChoice = "p"
    } else if(randomNumber == 2) {
    computerChoice = "r"
    }

    if (userChoice === "r" && computerChoice === "s" || userChoice === "p" && computerChoice === "r" || userChoice === "s" && computerChoice === "p"){
        alert("You win!");
        youWin++
    } else if (userChoice === "r" && computerChoice === "p" || userChoice === "p" && computerChoice === "s" || userChoice === "s" && computerChoice === "r"){
            alert("You lost!");
            youLost++
    } else if (userChoice ===  computerChoice){
        alert("It's a tie!");
        itsATie++
    } 
    
}



alert("You have won " + youWin + " times, " + "tied " + itsATie + " times, " + "lost " + youLost + " times")