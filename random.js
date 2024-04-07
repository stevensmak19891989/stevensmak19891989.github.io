let numbersArray = Array.from({ length: 90 }, (_, index) => index + 1);
let synth = window.speechSynthesis;
let speechEnabled = true; // Initial speech enabled
let selectedVoice = null;

const bingoTerms = {
  1: "Kelly's Eye",
  2: "One Little Duck",
  3: "Cup of Tea",
  4: "Knock at the Door",
  5: "Man Alive",
  6: "Tom Mix",
  7: "Lucky",
  8: "Garden Gate",
  9: "Doctor's Orders",
  10: "Boris's Den",
  11: "Legs Eleven",
  12: "One Dozen",
  13: "Unlucky for Some",
  14: "Valentine's Day",
  15: "Young and Keen",
  16: "Sweet Sixteen",
  17: "Dancing Queen",
  18: "Coming of Age",
  19: "Goodbye Teens",
  20: "One Score",
  21: "Key of the Door",
  22: "Two Little Ducks",
  23: "The Lord is My Shepherd",
  24: "Two Dozen",
  25: "Duck and Dive",
  26: "Pick and Mix",
  27: "Gateway to Heaven",
  28: "Overweight",
  29: "Rise and Shine",
  30: "Dirty Gertie",
  31: "Get Up and Run",
  32: "Buckle My Shoe",
  33: "All the Threes",
  34: "Ask for More",
  35: "Jump and Jive",
  36: "Three Dozen",
  37: "A Flea in Heaven",
  38: "Christmas Cake",
  39: "Steps",
  40: "Life Begins",
  41: "Time for Fun",
  42: "Whinny the Poo",
  43: "Down on Your Knees",
  44: "Droopy Drawers",
  45: "Halfway There",
  46: "Up to Tricks",
  47: "Four and Seven",
  48: "Four Dozen",
  49: "PC",
  50: "Half a Century",
  51: "Tweak of the Thumb",
  52: "Danny La Rue",
  53: "Stuck in the Tree",
  54: "Clean the Floor",
  55: "Snakes Alive",
  56: "Was She Worth It?",
  57: "Heinz Varieties",
  58: "Make Them Wait",
  59: "The Brighton Line",
  60: "Grandma's Getting Frisky",
  61: "Baker's Bun",
  62: "Turn the Screw",
  63: "Tickety Boo",
  64: "Red Raw",
  65: "Old Age Pension",
  66: "Clickety Click",
  67: "Made in Heaven",
  68: "Saving Grace",
  69: "Either Way Up",
  70: "Three Score and Ten",
  71: "Bang on the Drum",
  72: "Six Dozen",
  73: "Queen B",
  74: "Candy Store",
  75: "Strive and Strive",
  76: "Trombones",
  77: "Sunset Strip",
  78: "Heaven's Gate",
  79: "One More Time",
  80: "Eight and Blank",
  81: "Stop and Run",
  82: "Straight On Through",
  83: "Time for Tea",
  84: "Seven Dozen",
  85: "Staying Alive",
  86: "Between the Sticks",
  87: "Torquay in Devon",
  88: "Two Fat Ladies",
  89: "Nearly There",
  90: "Top of the Shop",
};

function generateRandomNumber() {
  const generatedNumberDiv = document.getElementById("generatedNumber");

  if (numbersArray.length > 0) {
    const randomIndex = Math.floor(Math.random() * numbersArray.length);
    const randomNumber = numbersArray[randomIndex];
    const bingoTerm = bingoTerms[randomNumber]; // Get the bingo term for the random number

    numbersArray.splice(randomIndex, 1);
    generatedNumberDiv.textContent = `${randomNumber}: ${bingoTerm}`;

    // Speak the number and bingo term if speech is enabled
    if (speechEnabled) {
      speakNumberWithTerm(randomNumber, bingoTerm);
    }

    // Check if all numbers are generated
    if (numbersArray.length === 0) {
      showBingoMessage();
    }
  } else {
    alert("All numbers from 1 to 90 have been generated!");
  }
}

function speakNumberWithTerm(number, bingoTerm) {
  let utterance = new SpeechSynthesisUtterance(
    `Number ${number}: ${bingoTerm}`
  );
  synth.speak(utterance);
}

function resetGenerator() {
  numbersArray = Array.from({ length: 90 }, (_, index) => index + 1);
  const generatedNumberDiv = document.getElementById("generatedNumber");
  generatedNumberDiv.textContent =
    "Click the button to generate a random number!";
}

function speakNumber(number) {
  let utterance = new SpeechSynthesisUtterance(number.toString());
  synth.speak(utterance);
}

function showBingoMessage() {
  const generatedNumberDiv = document.getElementById("generatedNumber");
  generatedNumberDiv.textContent = "Bingo!";
  if (speechEnabled) {
    speakBingo();
  }
}

function speakBingo() {
  let utterance = new SpeechSynthesisUtterance("Bingo!");
  synth.speak(utterance);
}

function toggleSpeech() {
  const speechToggle = document.getElementById("speechToggle");
  speechEnabled = speechToggle.checked;
}
