#!/ usr/bin/env node//shabang
import inquirer from "inquirer";
console.log("\n\twelcome to Rabiawaheed -cli Number guessing Game");
//1)computer will generate a random number - Done
//2)user input for guessing number - Done
//3)compare the user input with computer generated number and show result
const randomNumber = Math.floor(Math.random() * 5 + 1);
const answer = await inquirer.prompt([
    {
        name: "userguessedNumber",
        type: "Number",
        message: "Enter your guessed number(Number limit from 1 t0 5:)",
    },
]);
if (answer.userguessedNumber === randomNumber) {
    console.log("congratulation !you guess a correct Number");
}
else {
    console.log("sorry,you guess a wrong Number");
}
