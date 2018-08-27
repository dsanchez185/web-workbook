'use strict';
var userChoice = prompt("Do you choose Rock, Paper or Scissors?");

var computerChoice = Math.random();
if (computerChoice < 0.34) {
computerChoice = "Rock";
} else if (computerChoice <= 0.67) {
computerChoice = "Paper";
} else {
computerChoice = "Scissors";
}
//console.log("Computer chooses: " + computerChoice);
var compare = function(choice1,choice2){
if(choice1===choice2){
    return "The result is a tie!";
}
if(choice1==="Rock"){
    if(choice2==="Scissors"){
        return "Rock is the winner!";
    }
    else{
        return "Paper is the winner!";
    }
}
if(choice1==="Paper"){
    if(choice2==="Rock"){
        return "Paper is the winner!";
    }
    else{
        return "Scissors is the winner!";
    }
}
if(choice1==="Scissors"){
    if(choice2==="Rock"){
        return "Rock is the winner!";
    }
    else{
        return "Scissors is the winner!";
    }
}
};
document.write("Computer says I choose: " + computerChoice + "<br>");
document.write("User says, I choose: " + userChoice + "<br>");
document.write(compare(userChoice,computerChoice));


// var play = function(userChoice, computerChoice) {

//   if (userChoice === computerChoice) {
//    //rest of your function here
//   }
// } //closes compare function
