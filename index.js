const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

let passwordLength = 12;
let passwordOneEl = document.getElementById("password--one");
let passwordTwoEl = document.getElementById("password--two");

function getRandomCharacter() {
  let randomCharacter = Math.floor(Math.random() * characters.length);
  return characters[randomCharacter];
}

function generatePasswords() {
  let randomPasswordOne = "";
  let randomPasswordTwo = "";
  for (let i = 0; i < passwordLength; i++) {
    randomPasswordOne += getRandomCharacter();
    randomPasswordTwo += getRandomCharacter();
    passwordOneEl.textContent = randomPasswordOne;
    passwordTwoEl.textContent = randomPasswordTwo;
  }
  return randomPasswordOne, randomPasswordTwo;
}

passwordOneEl.textContent = generatePasswords();
passwordTwoEl.textContent = generatePasswords();
