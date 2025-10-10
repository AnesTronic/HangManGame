# The Game 
This is a classic Guess the Word game implemented using pure web technologies (HTML, CSS, JavaScript). The game focuses on guessing the names of countries.


## Game’s Link

https://anestronic.github.io/HangManGame/

## Overview and Concept

This project is an implementation of the classic "Guess the word" game,built entirely using foundational web technologies (HTML, CSS and JavaScript).
## CoreIdea
The player's goal is to guess the name of a country randomly selected from a predefined list. The player has a maximum of 8 attempts before the game is lost.
## Key Mechanics
Interactive Input: The alphabet is displayed as a series of clickable buttons, which are automatically disabled once used.

Problem Solution: Spaces within country names (e.g., New Zealand) are cleverly replaced with the "+" sign when displayed, eliminating the need to guess spaces.

Seamless Restart: The integrated Start/Restart button allows the user to immediately begin a new round without refreshing the browser.

Status Display: Game results (win or loss) are shown neatly on the screen instead of using disruptive pop-up alerts.

### HTML
This is the game's skeleton, primarily using IDs to create structure and allow connection to the JavaScript logic.
​The main game body is defined within the primary container <div id="game-container">.
​The element <span id="attempts-left"> is used for dynamically displaying the remaining guesses.
​<div id="word-display"> is the container that shows the currently guessed word (dashes and letters).
​<div id="alphabet-container"> serves as the placeholder where JavaScript dynamically creates all the letter buttons.


​The button 

button enables the game to be restarted.
​<div id="status-message"> is used to display the win/loss messages, replacing the alert() pop-ups.

### CSS​
​The body element is styled to set a background image (e.g., a map/atlas) across the entire page.
​The property background-size: cover; ensures the background image fills the entire viewport.
* ​Using display: flex; on the main container helps center the game content neatly on the screen.
​* Buttons within #alphabet-container use appropriate layout (like grid or flex-wrap) for an organized keyboard display.
​* Selectors targetting buttons (e.g., button:disabled) change the appearance of letters that have already been clicked.
​* Consistent typography, font color, and margins are set across the game for readability.

### **JavaScript logic(app.js)**

​startGame() Function: This is the core function that resets the entire game, selecting a new random country, clearing old buttons, and setting initial counters.
​Dynamic Keyboard: The alphabet.forEach loop dynamically creates all 26 letter buttons and assigns the click-handling logic.
​Attempt Tracking: The global variables wrongGuesses and MAX_ATTEMPTS (set to 8) manage the game's limit and update the remaining attempts display.
​findAllIndexes: A critical helper function used to find all positions of a guessed letter within the hidden word, revealing multiple instances at once.
​Game Status: Logic checks for win/loss conditions and calls disableAllLetterButtons() to end the interaction.
​UI Update: The updateWordDisplay function handles updating the word-display element with the correctly guessed letters


## The approach taken:

Day 1 - As this was my first project, I didn’t have much planned, I knew what I wanted, but I didn’t know yet how to plan or design a wireframe.

Day 2 - I worked on making the keyboard keys clickable, so that once a key is clicked it can not be clicked again until a new word appears.
I also made adjustements to the font style and notifications, and worked on getting teh Strart/Restart button to function properly. 

![alt text](<assets/Screenshot 2025-10-10 at 08.47.49.png>)

![alt text](<assets/Screenshot 2025-10-10 at 08.50.00.png>)

![alt text](<assets/Screenshot 2025-10-10 at 08.59.51.png>)
## Key learnings:

- Learned how to use Container box.
- Learned how to use CSS.
- Learned how to create a pop-up using JavaScript, HTML and CSS.

## Future improvements:

- Future improvements  could include displaying the country's falg once correct answer is guessed.
alternatively, this feature could be used as a difficulty level in the game- for example, an eaisier level could show the falg first, and the player would then have to guess the country's name.

## Bugs:

- There aren’t any obvious bugs, but it would be nice to rewrite using React to see the difference between codes.