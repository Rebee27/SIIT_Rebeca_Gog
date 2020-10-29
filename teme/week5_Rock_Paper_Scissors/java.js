//Create an array with all the possibilities (rock, paper, scissors);
var game = new Array("rock", "paper", "scissors");

function Play() {

    //Pick a random option for Computer ( use Math.random);
    var Computer = Math.floor(Math.random() * game.length);

    //Pick a random option for User ( use Math.random);
    var User = Math.floor(Math.random() * game.length);

    //Apply game rules for both options (use if/else if structures)
    if (game[Computer] === "rock" && game[User] === "paper" ||
        game[Computer] === "paper" && game[User] === "scissors" ||
        game[Computer] === "scissors" && game[User] === "rock") {
        console.log("Computer choice:", game[Computer]);
        console.log("User choice:", game[User]);
        console.log("User wins");
    }
    else if (game[Computer] === "rock" && game[User] === "scissors" ||
        game[Computer] === "paper" && game[User] === "rock" ||
        game[Computer] === "scissors" && game[User] === "paper") {
        console.log("Computer choice:", game[Computer]);
        console.log("User choice:", game[User]);
        console.log("Computer wins");
    }
    else if (Computer === User) {
        console.log("Computer choice:", game[Computer]);
        console.log("User choice:", game[User]);
        console.log("It's a win-win");
    }
}

Play();