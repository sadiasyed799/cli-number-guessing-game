#! /usr/bin/env node
import inquirer from "inquirer";
// 1) computer will generate a random number done
// 2) user input for guessing number done
// 3) compare user input with computer generated number and shw result done
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answers = await inquirer.prompt([
    {
        name: "userGuessNumber",
        type: "number",
        message: "Please guess a number between 1-6:",
    }
]);
if (answers.userGuessedNumber === randomNumber) {
    console.log("Congratulations! you guessed right number");
}
else {
    console.log("You guessed wrong number");
}
