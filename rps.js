var person = prompt("Welcome to Rock, Paper, Scissors game. How many rounds would you like to play?");
var rounds = parseInt(person, 10);
var playagain = "Y";
var endgame = "N";

var user = prompt("r, p, or s")

Math.floor(Math.random() * 3)

var userChoice = user
var computerChoice = Math.random();

while (playagain == "Y") {
    var compare = function(choice1,choice2){
    if(choice1===choice2){
        alert("The result is a tie!");
    }
    if(choice1==="r"){
        if(choice2==="s"){
            alert("rock wins");
        }
        else{
            alert("paper wins");
        }
    }
    if(choice1==="p"){
        if(choice2==="r"){
            alert("paper wins");
        }
        else{
            alert("scissors wins");
        }
    }
    if(choice1==="s"){
        if(choice2==="r"){
            alert("rock wins");
        }
        else{
            alert("scissors wins");
        }
    }
};
compare(userChoice,computerChoice);
playagain = prompt("Do you want to play again, Y or N");
userChoice = prompt("Choose rock, paper, or scissors");
}