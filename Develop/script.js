// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
 

//functions 
function checkLength() {
var passLength = prompt("How many character would you like your password to be? (must be within 8 and 128) ");
if (passLength < 8 || passLength > 128) {
  alert("password characters must be between 8 and 128");
}
else if (passLength >= 8 && passLength <= 128) {
  generatePassword();
}
}

function generatePassword(){
  var lowPass = confirm("would you like lowercase characters in your password?");
  var uppPass = confirm("would you like upper case characters in your password?");
  var numPass = confirm("would you like numerical characters in your password?");
  var specPass = confirm("would you like special characters in your password?");
  var min = 0;

    if (!lowPass && !uppPass && !numPass && !specPass) {
      alert("must select atleast one"); 
      generatePassword();
  } 
    
     

  var minLow = " ";
  var minUpp = " ";
  var minNum = " ";
  var minSpec = " ";


  var functionArray = [

    function ranLowNum() {
      return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
    },
    
    function ranUppNum() {
      return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
    },
    
    function ranNumb() {
      return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
    },
    
    function ranSpecSymbol() {
      const specSymbol =  "!#$%&'()*+,-./:;<=>?@[^_`{|}~";
      return symbols[Math.floor(Math.random() * specSymbol.length)];
    }
    
  ]

  if (lowPass){

  }


  }  


