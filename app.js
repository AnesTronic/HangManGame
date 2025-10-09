

const countries = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua & Barbuda",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bhutan",
  "Bolivia",
  "Bosnia & Herzegovina",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cabo Verde",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Comoros",
  "Congo (Republic of the)",
  "Congo (Democratic Republic of the)",
  "Costa Rica",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czechia",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Eswatini",
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Grenada",
  "Guatemala",
  "Guinea",
  "Guinea‑Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Korea, North",
  "Korea, South",
  "Kosovo",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "North Macedonia",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Kitts & Nevis",
  "Saint Lucia",
  "Saint Vincent & the Grenadines",
  "Samoa",
  "San Marino",
  "São Tomé & Príncipe",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Sudan",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Togo",
  "Tonga",
  "Trinidad & Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States of America",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Vatican City",
  "Venezuela",
  "Vietnam",
  "Yemen",
  "Zambia",
  "Zimbabwe"
];

//
const container = document.getElementById('alphabet-container');

////mathr random-it generates radomly number from 0 to 1,
//math floor rounds the given number low to the nearest whole integer, 
// math and floor combined  generate  a random index within an arrays range
const randomIndex = Math.floor(Math.random() * countries.length);
const randomCountry = countries[randomIndex];
console.log(randomCountry);
console.log(randomCountry.length);
const displayedCountry = randomCountry.replace(/\s/g, '+');
const alphabet = Array.from({ length: 26 }, (_, i) => String.fromCharCode(97 + i));
console.log(alphabet);

// its a function taht is finding and return all positions or indexes where a specific letter appears within a given word in lower case
function findAllIndexes(word, letter) {
  const indexes = [];
  const lowerWord = word.toLowerCase();     // converts the entire word to lovercase letters
  const lowerLetter = letter.toLowerCase(); //converts the guessed etter to lovercase letter
//its a mtethod that is going trough array adds the current value of the variable i wich represents position of the letter to indexes array
  for (let i = 0; i < lowerWord.length; i++) {
    if (lowerWord[i] === lowerLetter) {
      indexes.push(i);
    }
  }
   console.log(indexes)
  return indexes;
}

const wordDisplay = document.getElementById("word-display");
const attempotsLeftDisplay = document.getElementById("attempts-left");
const letterButtonsContainer = document.getElementById("alphabet-container");
const startButton = document.getElementById("start-button");
const gameMessages = document.getElementById("status-message");

const maxAttempts = 8;
let wrongGuesses = 0;
let currentWordState = Array(randomCountry.length).fill("_");
  for (let i = 0; i < displayedCountry.length; i++){
    if (displayedCountry[i] === '+'){
      currentWordState[i] = '+';
    }
  }

wordDisplay.textContent = currentWordState.join(" ");
attempotsLeftDisplay.textContent = maxAttempts - wrongGuesses;
function updateWordDisplay(letter,positions) {
    positions.forEach(index =>{
        currentWordState[index] = letter.toUpperCase();
    });
    wordDisplay.textContent = currentWordState.join(" ");
}
function disableAllLetterButtons(){
  const buttons = letterButtonsContainer.querySelectorAll('button');
  buttons.forEach(btn => {
    btn.disabled = true;
  });
}
function startGame() {
  letterButtonsContainer.innerHTML = '';
  gameMessages.textContent = '';
  wrongGuesses = 0;
  const randomIndex = Math.floor(Math.random() * countries.length);
  const randomCountry = countries[randomIndex];
  const displayedCountry = randomCountry.replace(/\s/g, '+');
  currentWordState = Array(displayedCountry.length).fill("_");
  for (let i = 0; i < displayedCountry.length; i++){
    if (displayedCountry[i] === '+'){
      currentWordState[i] = '+';
    }
  }
  wordDisplay.textContent = currentWordState.join(" ");
  attempotsLeftDisplay.textContent = maxAttempts - wrongGuesses

// Loop through the alphabet(A to Z) and create a button for each letter
alphabet.forEach(letter => {
  const button = document.createElement('button');
  button.textContent = letter;
  container.appendChild(button);
  button.addEventListener('click', (e) => {
    e.target.disabled = true;
    const letterToGuess = letter.toLowerCase();
     const positions = findAllIndexes(randomCountry, letterToGuess);

  if (positions.length > 0) {
    console.log(`Letter "${letter}" found at positions: ${positions.join(', ')}`);
          updateWordDisplay(letter,positions);
          if(!currentWordState.includes("_")){
            gameMessages.textContent = "Congradulations, you guessed the word!";
             //alert("Congradulations, you guessed the word!");
             gameMessages.classList.add('win')
            disableAllLetterButtons();
          }
  } else {
    console.log(`Letter "${letter}" not found in the word.`);
        wrongGuesses++;
        attempotsLeftDisplay.textContent = maxAttempts - wrongGuesses;
        if (wrongGuesses >= maxAttempts){
          gameMessages.textContent = `You lost! The word was: ${randomCountry}`//alert(`You lost! The word was: ${randomCountry}`);
          gameMessages.classList.add('lost')
          disableAllLetterButtons();
        }
  }
  });
});
}
startGame();
startButton.addEventListener('click',startGame);