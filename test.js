//
//=================================
//=========================
// 1. MAIN ATRIBUTES (Setting up
//variables and word list)
//
//=================================
//=========================

// List of words and categories
const wordList = [
{word: 'programing', category: 'Code Basics'},
{ word: 'visualstudio', category: 'Development Tools'},
{ word: 'javascript', category:
'Languages' },
{ word: 'terminal', category:
'Development Tools' },
{ word: 'github', category: 'Development Tools'
}

];

// Main variables for tracking game state
let chosenWord = ''; // The word to be
//guessed
let guessedLetters = []; // Letters already
//guessed
let wrongGuesses = 0; // Number of
//incorrect attempts
const maxWrongGuesses = 8; //
//Maximum allowed incorrect attempts

// HTML Elements (Connecting JS to the UI)
const wordDisplay =
document.getElementById('word-display');
const attemptsLeft =
document.getElementById('attempts-left');
const keyboardContainer = document.getElementById('keyboard-container');

const startButton =
document.getElementById('start-button');
const messageText =
document.getElementById('message-text');

//
//=================================
//=========================
// 2. INITIALIZATION AND RESET
//FUNCTIONS
//
//=================================
//=========================

// 2.1 Function to select a word and set the
//initial state
const initGame = () => {
// 1. Resetting variables
wrongGuesses = 0;
guessedLetters = [];

messageText.textContent = ';';;
attemptsLeft.textContent =
maxWrongGuesses;

// 2. Selecting a random word
const randomIndex =
Math.floor(Math.random() *
wordList.length);
const { word, category } =
wordList[randomIndex];
chosenWord = word;

const currentWordState =
chosenWord.split('').map(letter => {
return guessedLetters.includes(letter)
? letter : '_';
}).join(' ');

wordDisplay.textContent =

currentWordState;
messageText.textContent = `Category:
${category}`;


createKeyboard();
};

// 2.2 Creating a virtual keyboard (buttons
//for letters A-Z)
const createKeyboard = () => {
keyboardContainer.innerHTML = '' //
//Clears previous buttons
const alphabet =
'abcdefghijklmnopqrstuvwxyz';

for (const char of alphabet) {
const button =
document.createElement('button');
button.textContent =
char.toUpperCase();

button.classList.add('keyboard-button');
//button.classList.add('keyboard-
//button');
button.id = `key-${char}`; // Adding an
//ID for easy disabling

// Connecting the click handling
//function
button.addEventListener('click', () =>
handleGuess(char));

keyboardContainer.appendChild(button);
}
// Disabling the start button while the
//game is running
startButton.disabled = true;
};

//
//=================================
//=========================

// 3. MAIN FUNCTION THAT RUNS THE
//GAME FLOW
//
//=================================
//=========================

// 3.1 Function that processes the letter
//guess
const handleGuess = (guess) => {
// Check if the letter has already been
//guessed
const normalizedGuess = guess.toLowerCase();
if (guessedLetters.includes(normalizedGuess)) {
return;
}
guessedLetters.push(normalizedGuess);
const clickedButton = document.getElementById(`key-${nomrlaizedGuess}`);
if (clickedButton) {
    clickedButton.disabled = true;
}
if(choosenWord.includes(nomrlizedGuess)){
    updateWordDisplay();
    if(!wordDisplay.textContent.includes('_')){
        gameOver(true);
    }
} else{
    wrongGuesses++;
    attemptsLeft.textContent = maxWrongGuesses - wrongGuesses;
    if(wrongGuesses >=maxWrongGuesses) {
        gameOver(false)
    }
}
};
// 1. Add the letter to the list of guessed
//letters
// guessedLetters.push(guess);

// 2. Disable the button after click
const clickedButton =

// document.getElementById(`key-${guess}`);
// if (clickedButton) {
// clickedButton.disabled = true;
// }

// 3. Check if the letter is in the word
// if (chosenWord.includes(guess)) {
// // Correct letter, update the word
// display
// updateWordDisplay();

// Check if the player has won
// if
// (!wordDisplay.textContent.includes(' _ ')) {
// gameOver(true);
// }
// } else {
// // Incorrect letter, increment the count
// //of wrong guesses
// wrongGuesses++;
// attemptsLeft.textContent =

maxWrongGuesses - wrongGuesses; //Update the number

// Optional: Update hangman image
//here
// updateHangmanImage();

// Check if the player has lost
// if (wrongGuesses >=
// maxWrongGuesses) {
// gameOver(false);
// }
// }


// 3.2 Helper function to update the word
//display
const updateWordDisplay = () => {
const newWordState =
chosenWord.split(' ').map(letter => {
return guessedLetters.includes(letter)

? letter : '_';
}).join(' ');
wordDisplay.textContent =
newWordState;
};

// 3.3 Function for game over
const gameOver = (isVictory) => {
// 1. Display the message (you win! or
//you lose, the word was..)
if (isVictory) {
messageText.textContent =
'Congratulations! You win!';
} else {
messageText.textContent = `You lost,
the word was:
${chosenWord.toUpperCase()}`;
}

// 2. Disable the entire keyboard
const buttons =

keyboardContainer.querySelectorAll(keyboard-button);//keyboard-button);
buttons.forEach(button => {
button.disabled = true;
});

// 3. Enable the restart button
startButton.disabled = false;
};

//
//=================================
//=========================
// 4. EVENTS
//
//=================================
//=========================

// Start the game by clicking the button
startButton.addEventListener('click',initGame);

// Set initial UI state when the page loads
document.addEventListener('DOMContentLoaded',() =>{
attemptsLeft.textContent =
maxWrongGuesses;
messageText.textContent = 'Click "Start Game" to begin.'; 
});