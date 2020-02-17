// Assignment 1 | COMP1073 Client-Side JavaScript
let insertx = ["the turkey", "mom", "dad", "teacher", "elephant"];
let inserty = ["sat on", "ate", "danced with", "saw", "doesn't like"];
let insertz = ["a funny", "a scary", "a goofy", "a slimmy", "a barking"];
let inserta = ["goat", "monkey", "fish", "cow", "frog"];
let insertb = [
  "on the moon",
  "on the chair",
  "in my soup",
  "on th grass",
  "in my shoes"
];
var a1, a2, a3, a4, a5;
/* Variables
-------------------------------------------------- */
// Create a new speechSynthesis object
var synth = window.speechSynthesis;
// Learn more about SpeechSynthesis.speak() at https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/speak
var textToSpeak =
  "This is the text string that you will generate with your script";
var speakButton = document.querySelector("button");
var noun = document.getElementById("insertx");
var verb = document.getElementById("inserty");
var adjective = document.getElementById("insertz");
var noun2 = document.getElementById("inserta");
var verb2 = document.getElementById("insertb");
var sentence = document.getElementById("form");
var repeat = document.getElementById("repeat");
/* Functions
-------------------------------------------------- */
function speakNow(string) {
  // Create a new speech object, attaching the string of text to speak
  var utterThis = new SpeechSynthesisUtterance(string);
  // Actually speak the text
  synth.speak(utterThis);
}

/* Event Listeners
-------------------------------------------------- */
// Onclick handler for the button that speaks the text contained in the above var textToSpeak
speakButton.onclick = function() {
  speakNow(textToSpeak);
};
noun.onclick = function() {
  var nounArrIndex = Math.floor(Math.random() * insertx.length);
  var nounVariable = insertx[nounArrIndex];
  a1 = nounVariable;
  textToSpeak = nounVariable;
  speakNow(textToSpeak);
};
noun2.onclick = function() {
  var nounA = Math.floor(Math.random() * inserta.length);
  var nounVa = inserta[nounA];
  a4 = nounVa;
  textToSpeak = nounVa;
  speakNow(textToSpeak);
};
adjective.onclick = function() {
  var Adj = Math.floor(Math.random() * inserty.length);
  var adje = inserty[Adj];
  a2 = adje;
  textToSpeak = adje;
  speakNow(textToSpeak);
};
verb.onclick = function() {
  var verb = Math.floor(Math.random() * insertz.length);
  var ver = insertz[verb];
  a3 = ver;
  textToSpeak = ver;
  speakNow(textToSpeak);
};
verb2.onclick = function() {
  var ve = Math.floor(Math.random() * insertb.length);
  var vr = insertb[ve];
  a5 = vr;
  textToSpeak = vr;
  speakNow(textToSpeak);
};
var nounArrIndex = Math.floor(Math.random() * insertx.length);

var Adj = Math.floor(Math.random() * inserty.length);
var verb = Math.floor(Math.random() * insertz.length);
var nounA = Math.floor(Math.random() * inserta.length);
var ve = Math.floor(Math.random() * insertb.length);
var nounVariable = insertx[nounArrIndex];

var adje = inserty[Adj];
var ver = insertz[verb];
var nounVa = inserta[nounA];
var vr = insertb[ve];
function sent() {
  nounArrIndex = Math.floor(Math.random() * insertx.length);

  Adj = Math.floor(Math.random() * inserty.length);
  verb = Math.floor(Math.random() * insertz.length);
  nounA = Math.floor(Math.random() * inserta.length);
  ve = Math.floor(Math.random() * insertb.length);
  nounVariable = insertx[nounArrIndex];
  adje = inserty[Adj];
  ver = insertz[verb];
  nounVa = inserta[nounA];
  vr = insertb[ve];
}
sentence.onclick = function() {
  sent();
  textToSpeak = nounVariable + adje + ver + nounVa + vr;
  speakNow(textToSpeak);
};

repeat.onclick = function() {
  textToSpeak = a1 + a2 + a3 + a4 + a5;
  speakNow(textToSpeak);
};
