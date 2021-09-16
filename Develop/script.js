// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  function generatePassword() {
 //Define numbers
    var numbers =[0,1,2,3,4,5,6,7,8,9];
// Define lower case letters
    var lowerCase = ["a", "b","c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m","n", "o", "p", "q", "r", "s", "t", "u", "v","w","x","y","z"]
//Define upper case letters
    var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M" , "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
//Define special characters
    var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*","’", "(", ")", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "~", "{","}","[","]"]
 //created prompt to chose password length   
    passwordLength = prompt("How long do you want your password? Please choose between 8 and 128");
    if (!passwordLength){
      alert("Please select a value!");
    } else if (passwordLength < 8 || passwordLength > 128){
      passwordLength = prompt("Please choose a number between 8 and 128!");
    } else {
      numbers = confirm("Will the password include numbers?");
      lowerCase = confirm("Will the password include lower case letters?");
      upperCase = confirm("Will the password include upper case letters?");
      specialCharacters = confirm("will the password include special characters?");
    }
  }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
