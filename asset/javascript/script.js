const message = document.querySelector(".message");
const guess = document.querySelector("input");
const button = document.querySelector("button");
const myArray = [
  "علیرضا",
  "محسن ",
  "عماد",
  "سروش",
  "رضا",
  "محمد",
  "علی",
  "عباس",
  "جعفر",
  "نبز",
  "مصطفی",
  "سجاد",
  "پرهام",
];
let scramble = "";
let scrambled = "";
let score = 0;
let inPlay = false;
button.addEventListener("click", function () {
  console.log("Clicked");

  if (!inPlay) {
    inPlay = true;
    button.innerHTML = " حدس بزن";
    guess.classList.toggle("hidden");
    guess.value = "";

    scramble = createWord();
    scrambled = randomArrey(scramble.split("")).join("");
    message.innerHTML = scrambled;
  } else {
    let tempGuess = guess.value;
    score++;
    if (tempGuess === scramble) {
      inPlay = false;
      message.innerHTML =
        "کلمه درست" + " " + scramble + " " + " تعداد حدس ها:" + " " + score;
      button.innerHTML = "َدوباره امتحان کن";
      guess.classList.toggle("hidden");
    } else {
      message.innerHTML = "غلط حدس زدید کلمه درست" + " " + scramble;
    }
  }
});
function createWord() {
  let randomIndex = Math.floor(Math.random() * myArray.length);
  let tempWord = myArray[randomIndex];
  return tempWord;
}
function randomArrey(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    let temp = arr[i];
    let j = Math.floor(Math.random() * (i + 1));
    arr[i] = arr[j];
    arr[j] = temp;
  }
  return arr;
}
