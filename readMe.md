// Hang man Game

//the ganme is deigned for the user to select a category of words they need to guess,  program chooses a random word, and then they guess the letter within the offered sequence.
// then when the user types the letter, if it is  correct, the program enters it into the corresponding position in that word. If it is incorect, it registers that the letter is not in the word and tracks how many attempts are remaining (optional- a part of the hangman is drawn).
// if the lifes goes down to the zero it display " Game over" othervise the game continues, and the winner is when you guess all of the right letters in the word.

// 	•	Parts and attributes of the game:
// 	1.Main attributs: 
// 	⁃	lists of words from which is one is choosed randomly.
// 	⁃	A variable that stores the chosen randomly.
// 	⁃	a variable for the maximum allowed number of wrong guesses
// 	⁃	a list of guessed letters(to prevent repeating the same guess)
// 	2.Functions that the program should include
// 		select a random word from the words array.
//  - Event listeners to check the value when a latter is clicked.
//  - need the function to check if that letter is part of the word selecetd
//  - we need function for win
//  - function forloose
//  - function  that displays the current state of the word: revealed letters and underscores for hidden ones.
//  - function that requests the player to input letter;
//      -checks if the input is valid (only one letter not used before) 
//  - function that chacks if the guessed letter is in the word.
//      - if yes -> adds it to the list of guessed letters.
//      - if no -> decreases the number of remaining attempts
//  - functions that returns TRUE if all letters are guessed, otherwise FALSE
//  - MAIN function taht runs the game flow;
//      - chooses a word
//      - repeats input and checks until the word is guessed or attempts run out
//      - at the end, prints a message: "You win!" or  "You loose, the word was.."
//  - OPTIONAL functions
//      - function to draw the "hangman" depending on numbers of mistake
//      - function to restart the game (ask the player if they want to play again)
//      - function to loiad words from file ( instead of a fixed list from teh game computer)
//      - function to save results (numbers of wins or looses)
//
//
