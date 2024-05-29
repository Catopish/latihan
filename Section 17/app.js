let guess = parseInt(prompt("enter your guess number (1-10):"));
while (!guess) {
  guess = parseInt(prompt("enter a valid number!! (1-10):"));
}
const random = Math.floor(Math.random() * 10) + 1;
console.log(random);
let attempts = 1;
while (guess !== random) {
  if (guess < random) {
    guess = parseInt(
      prompt("Your number is lower. Enter your guess number (1-10):")
    );
    attempts++;
  } else if (guess > random) {
    guess = parseInt(
      prompt("Your number is Higher. Enter your guess number (1-10):")
    );
    attempts++;
  } else if (!guess) {
    guess = parseInt(prompt("enter a valid number!! (1-10):"));
    attempts++;
  }
}

alert(`Congratulations! you attempt this guessing game ${attempts} times`);
