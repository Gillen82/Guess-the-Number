"use strict";

let targetNumber = Math.floor(Math.random() * 100) + 1;
const input = document.querySelector("#guess");
const submitGuess = document.querySelector("#submitGuess");
const guessMessage = document.querySelector("#guessMessage");
const resetGame = document.querySelector("#resetGame");
const list = document.querySelector("#guessListFlex");

let inputValue = 0;
let isGameOver = false;

console.log(targetNumber);

// Main Game Function
function guess() {
	if (!isGameOver) {
		const newListItem = document.createElement("li");
		const myGuess = parseInt(inputValue);
		newListItem.innerText = myGuess;
		if (!isNaN(myGuess)) {
			list.append(newListItem);
		}

		if (myGuess === targetNumber) {
			guessMessage.innerText = `You guessed ${myGuess}. You are Correct!!`;
			isGameOver = true;
			guessMessage.classList.add("right");
		} else {
			if (myGuess <= 0 || myGuess > 100 || isNaN(myGuess)) {
				guessMessage.innerText = "Your guess must be a number between 1 - 100";
				input.value = "";
			} else if (myGuess < targetNumber) {
				guessMessage.innerText = `You guessed ${myGuess}. That number is too low!`;
				guessMessage.classList.add("wrong");
			} else {
				guessMessage.innerText = `You guessed ${myGuess}. That number is too high!`;
				guessMessage.classList.add("wrong");
			}
		}
		input.value = "";
	}
}

// Reset the Game
function reset() {
	inputValue = 0;
	isGameOver = false;
	input.value = "";
	targetNumber = Math.floor(Math.random() * 100) + 1;
	console.log(targetNumber);
	guessMessage.innerText = "Guess the new number between 1 - 100";
	guessMessage.classList.remove("right", "wrong");
	list.innerHTML = "";
}

input.addEventListener("input", function () {
	inputValue = input.value;
});

submitGuess.addEventListener("click", guess);
resetGame.addEventListener("click", reset);
