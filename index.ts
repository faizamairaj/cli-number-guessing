#! /usr/bin/env node

import inquirer from "inquirer";

//computer will generater a random number
//user input a guessing number
//compare user input with computer generated number and show result

const randomNumber = Math.floor(Math.random()* 7+1);

const answers = await inquirer.prompt([
   {
    type: "number",
    name: "userGuessedNumber",
    message: "Please guess a number"
   }, 
]);
if(answers.userGuessedNumber === randomNumber){
   console.log("Congratulations! you guessed right number");
}else{
    console.log("You Guessed Wrong Number sorry you loss the game");
}




