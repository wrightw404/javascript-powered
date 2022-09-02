// Assignment code here
var lowerCase = [
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
  "z"
];
var upperCase = [
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
  "Z"
];
var numberical = [
  "1",
  "2",
  "3", 
  "4", 
  "5", 
  "6", 
  "7", 
  "8", 
  "9"
];
var specialCharacters = [
  "!", 
  "#", 
  "$", 
  "%", 
  "&", 
  "(", 
  ")", 
  "*", 
  "+", 
  ",", 
  "-", 
  ".", 
  "/", 
  ":", 
  ";", 
  "<", 
  "=", 
  ">", 
  "?", 
  "@", 
  "[", 
  "^", 
  "_", 
  "`", 
  "{", 
  "|", 
  "}", 
  "~"
];

var passLength = parseInt(prompt("How many character would you like your password to be? (must be within 8 and 128) "), 10);

function inputData() {
if (passLength < 8 || passLength > 128) {
  alert("password characters must be between 8 and 128");
  return null;
}


  var lowPass = confirm("would you like lowercase characters in your password?");
  var uppPass = confirm("would you like upper case characters in your password?");
  var numPass = confirm("would you like numerical characters in your password?");
  var specPass = confirm("would you like special characters in your password?");
  

    if (!lowPass && !uppPass && !numPass && !specPass) {
      alert("must select atleast one"); 
      return null
  } 
  var inputCriteria = {
    passLength: passLength,
    lowPass: lowPass,
    numPass: numPass,
    specPass: specPass
  }
  return inputCriteria;
}

function generateRandom(arr) {
  var randomI = Math.floor(Math.random() * arr.length);
  var randomCharacter = arr[randomI];
  return randomCharacter;
}

function generatePassword(){
  var criteria = inputData(); 
  var results = [];
  var possibleChar = [

  ];

  var guranteeChar = [

  ];

  if(criteria.lowPass){
    possibleChar = possibleChar.concat(lowerCase);
    guranteeChar.push(generateRandom(lowerCase));
    }
  if(criteria.uppPass){
    possibleChar = possibleChar.concat(upperCase);
    guranteeChar.push(generateRandom(upperCase));
    }
  if(criteria.numPass){
      possibleChar = possibleChar.concat(numberical);
      guranteeChar.push(generateRandom(numberical));
    }
  if(criteria.specPass){
      possibleChar = possibleChar.concat(specialCharacters);
      guranteeChar.push(generateRandom(specialCharacters));
    }


  for( i = 0; i < criteria.length; i++) { 
    var possibleChar = generatePassword(possibleChar);

    results.push(possibleChar);
  }

  for(var i = 0; i < guranteeChar.length; i++) {
    results[i] = guranteeChar[i];
  }

  return results.join("");

}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword(); //generatePassword()
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
 

//functions 

    
     

