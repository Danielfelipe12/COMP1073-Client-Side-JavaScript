/* Variables */
var synth = window.speechSynthesis;
var textToSpeak = '';
var speakButton = document.querySelector('#speakButton');
var nounButton = document.getElementById('nounButton');
var verbButton = document.getElementById('verbButton');
var adjectiveButton = document.getElementById('adjectiveButton');
var noun2Button = document.getElementById('noun2Button');
var placeButton = document.getElementById('placeButton');

var nouns = ['cat', 'dog', 'house', 'car', 'book'];
var verbs = ['run', 'jump', 'eat', 'sleep', 'dance'];
var adjectives = ['happy', 'sad', 'big', 'small', 'beautiful'];
var nouns2 = ['table', 'tree', 'flower', 'computer', 'pen'];
var places = ['beach', 'mountain', 'park', 'city', 'forest'];

/* Functions */
function getRandomWord(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function updateTextToSpeak() {
  textToSpeak = getRandomWord(nouns) + ' ' + getRandomWord(verbs) + ' ' + getRandomWord(adjectives) + ' ' + getRandomWord(nouns2) + ' ' + getRandomWord(places);
}

function speakNow() {
  var utterThis = new SpeechSynthesisUtterance(textToSpeak);
  synth.speak(utterThis);
}

/* Event Listeners */
speakButton.addEventListener('click', speakNow);
nounButton.addEventListener('click', function() {
  textToSpeak += getRandomWord(nouns) + ' ';
});
verbButton.addEventListener('click', function() {
  textToSpeak += getRandomWord(verbs) + ' ';
});
adjectiveButton.addEventListener('click', function() {
  textToSpeak += getRandomWord(adjectives) + ' ';
});
noun2Button.addEventListener('click', function() {
  textToSpeak += getRandomWord(nouns2) + ' ';
});
placeButton.addEventListener('click', function() {
  textToSpeak += getRandomWord(places) + ' ';
});