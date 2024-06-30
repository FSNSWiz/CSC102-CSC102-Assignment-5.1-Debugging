function PressToPlay() {
    //This is a 1 line comment
    /*
    This is a function to play snake in Game.html
    Collect the Most apples
    Don't hit the walls
    Don't hit yourself
    Fabian Sherrill
    May 30th, 2024
    */
    console.log("PressToPlay() started");

    /*Rolling the dice, "Math.floor" rounds down to a number without decimals,
    "Math.random" randomizes the variable number being anywhere from 1-6
    assigns the die1 as a variable that is found with the possibility of 
    six sides and randomizes the variable result, it adds 1 to choose one of 
    the random variable*/
    var die1 = Math.floor(Math.random() * 6) + 1;
    console.log(die1);  //This logs to the console
    document.getElementById("die1Res").innerHTML = "die1 result = " + die1; /*This grabs 
    the element "die1 Results" and displays "die Result =" followed by the variable result 
    and displays the result within the inner html*/

    var die2 = Math.floor(Math.random() * 6) + 1; /*This is the same as die1 result */
    console.log(die2);
    document.getElementById("die2Res").innerHTML = "die2 result = " + die2;

    var sum = die1 - die2; /*This is the sum or total result; it adds the two dice numbers together*/
    console.log(sum);
    document.getElementById("sumRes").innerHTML = "sum result = " + sum;

    /*Look for a loss. Using the if, else if, else statment if the number results equal 7 or 11 the
    console logs this as an automatic loss. "document.getElementById" Grabs the "game result" and within
    the inner html changes the message to "You Lost!", The 2 pipes mean "or", a double equals tells the 
    console to question if these variables are equal to each other*/
    if (sum == 7 || sum == 11) {
        console.log("loss");
        document.getElementById("gameRes").innerHTML = "You Lost!";
    } else if (die1 == die2 && die1 % 2 == 0) {  /*look for a win, under the condition that the die get 
        the same number and the remainder of both numbers was zero the console was told they win. 7%3=1 9%3=0*/
        console.log("win");
        document.getElementById("gameRes").innerHTML = "You Won! Try again to test your luck.";
    } else { //everything else is a push, meaning if they don't equal eachother and aren't resulting with a remainder, then they tie 
        console.log("tie"); //The log is told it is a tie if it is either niether even numbers or 7 or 11
        document.getElementById("gameRes").innerHTML = "You didn't win And you didn't loose. Close Tie!";
    }

}
