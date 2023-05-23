let maximum = parseInt(prompt("enter the max number"));

while (!maximum) {
  maximum = parseInt(prompt("enter a valid number"));
}
let targetNumber = Math.floor(Math.random() * maximum) + 1;
// console.log(targetNumber);

let guess = prompt("enter your first guess");
let attempts = 1;

while (parseInt(guess) !== targetNumber) {
  if (guess === "q") break;

  guess = parseInt(guess);
  if (guess > targetNumber) {
    guess = prompt("too high");
    attempts++;
  } else if (guess < targetNumber) {
    guess = prompt("too low");
    attempts++;
  } else {
    guess = prompt("invalid guess");
  }
}

if (guess === "q") {
  console.log("you quit");
} else {
  console.log(`you got it. it took you ${attempts} guesses`);
}
