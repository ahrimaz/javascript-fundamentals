//generate a random number
//then take user's guess
//if gues is wrong, ask again (hint)
//if they win, say they won

function guessGame() {
  let randomNumber = Math.floor(Math.random() * 11);
  let guess;
  do {
    randomNumber = Math.floor(Math.random() * 11);
    guess = prompt("guess a number between 1-10");
    console.log(guess, randomNumber);
    if (randomNumber > guess) {
      console.log("u guessed too low");
    } else if (randomNumber < guess) {
      console.log("guess too high");
    }
  } while (guess != randomNumber);
  console.log("you win");
}

guessGame();
