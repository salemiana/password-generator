// Assignment code here
var num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "BCDEFGHIJKLMNOPQRSTUVWXYZ"];
var char = ["!", "#$%&'()*+,-./:;<=>?@[\]^_`{|}~"];
var passwordChar = "";
var genPassFinal = "";
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Get references to the #generate element
//var generateBtn = document.querySelector("#generate");
function generatePassword() {
  var promptUser = window.prompt("What is your password length choice?");
  //conditional statement for 8-128
  if (promptUser <= 8 || promptUser >=128) {
    window.alert("Choose a number between 8-128!");
    return;
  }
  //window.alert("Choose a number between 8-128!");
  var passNum = window.confirm("Do you want to include numbers?");
  var passLower = window.confirm("Do you want to include lowerCase?");
  var passUpper = window.confirm("Do you want to include uppercase?");
  var passChar = window.confirm("Do you want to include special characters?");
  //for (var i = 0; i >= 8; i++) {}
  var pool = [];
  if (passNum){
    pool = pool.concat(num);
  }
  if (passLower){
    pool = pool.concat(lowerCase);
  }
  if (passUpper){
    pool = pool.concat(upperCase);
  }
  if (passChar){
    pool = pool.concat(passChar);
  }
for (var i = 0; i < promptUser; i++){
  var index = Math.floor(Math.random()*pool.length);
  passwordChar = pool[index];
  genPassFinal = genPassFinal.concat(passwordChar);

}
return genPassFinal;
}
// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }


