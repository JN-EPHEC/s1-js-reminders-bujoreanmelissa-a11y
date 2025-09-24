/** 
 * This is a simple example of a TypeScript program that runs in Node.js.
 * It demonstrates basic TypeScript syntax, type annotations, and function usage.
 * 
 * Your job is to answer to the exercices described in the README.md file.
 * 
 * (You can delete the below block of code to do your exercises)
 * 
 * For the -- main -- branch containing your -- homework --:
 *      - You will find a README.md file with the instructions for the exercises.
 *      - Your code will be executed automatically to grade your work.
 *      - So please, use the exact same file names and structure as described in the README.md.
 * 
 * Let's get started!
 * **/

const message: string = "Hello, TypeScript with Node.js!";

function sayHello(msg: string): void {
    console.log(msg);
}

sayHello(message);