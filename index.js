#! /usr/bin/env node
import inquirer from "inquirer";
// 1) computer will generate a random number - DONE
// 2) user input for guessing number - DONE
// 3) compare user input with computer generated number and show result - DONE 
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answers = await inquirer.prompt([
    {
        name: "userguessedNumber",
        type: "number",
        message: "please guess a number between 1-6: ",
    },
]);
if (answers.userguessedNumber === randomNumber) {
    console.log("Congratulation! you guessed right number.");
}
else {
    console.log("You guessed wrong number.");
}
