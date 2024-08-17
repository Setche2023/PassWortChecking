// Die Variablen
var myInput = document.getElementById("pwd");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var besonderszeichen = document.getElementById("besonderszeichen");
var length = document.getElementById("length");
var ziffer = document.getElementById("ziffer");

// Funktion zum überprüfen ob das Passwort gültig ist
myInput.onfocus = function () {
  document.getElementById("hinweis").style.display = "block";
};

// hidden Box Hinweis
myInput.onblur = function () {
  document.getElementById("hinweis").style.display = "none";
};

// Ereignisbehandlung für Passwortänderungen
myInput.onkeyup = function () {
  // prüfen ob das Passwort mindestens 8 Zeichen lang ist
  var lowerCaseLetters = /[a-z]/g;
  if (myInput.value.match(lowerCaseLetters)) {
    letter.classList.remove("fehler");
    letter.classList.add("richtig");
  } else {
    letter.classList.remove("richtig");
    letter.classList.add("fehler");
  }

  // prüfen ob das Passwort mindestens einen Großbuchstaben enthält
  var upperCaseLetters = /[A-Z]/g;
  if (myInput.value.match(upperCaseLetters)) {
    capital.classList.remove("fehler");
    capital.classList.add("richtig");
  } else {
    capital.classList.remove("richtig");
    capital.classList.add("fehler");
  }

  // prüfen ob das Passwort mindestens einen SpecialCharacter enthält
  var specialChars = /[!@#$%^&*(),.?":;{}|<>]/;
  if (myInput.value.match(specialChars)) {
    besonderszeichen.classList.remove("fehler");
    besonderszeichen.classList.add("richtig");
  } else {
    besonderszeichen.classList.remove("richtig");
    besonderszeichen.classList.add("fehler");
  }

  //prüfen ob das Passwort mindestens einen Ziffer enthält
  var numbers = /[0-9]/g;
  if (myInput.value.match(numbers)) {
    ziffer.classList.remove("fehler");
    ziffer.classList.add("richtig");
  } else {
    ziffer.classList.remove("richtig");
    ziffer.classList.add("fehler");
  }
  //prüfen ob das Passwort mindestens 8 Zeichen lang ist
  if (myInput.value.length >= 8) {
    length.classList.remove("fehler");
    length.classList.add("richtig");
  } else {
    length.classList.remove("richtig");
    length.classList.add("fehler");
  }
};
