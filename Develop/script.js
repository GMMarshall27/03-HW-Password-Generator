// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  function generatePassword() {
    //variable added for all of the characters when selected
    var allCharacters = [];
    //created prompt to chose password length   
      passwordLength = prompt("How long do you want your password? Please choose between 8 and 128");
    if (!passwordLength){
      alert("Sorry you must input a number!");
      return;

    } 
    if (passwordLength < 8 || passwordLength > 128){
      passwordLength = alert("You must choose a number between 8 and 128!");
      return;
    }
    //brings up confirm prompts on selection when number is chosen
    else if (passwordLength >7 && passwordLength <129){
      numbers = confirm("Will the password include numbers?");
      lowerCase = confirm("Will the password include lower case letters?");
      upperCase = confirm("Will the password include upper case letters?");
      specialCharacters = confirm("will the password include special characters?");
    } else {
      alert("You must pick a number!");
      return;
    };
    //added if statement so that if nothing is selected alert is sent
    if (!numbers && !lowerCase && !upperCase && !specialCharacters ){
        alert("Sorry, you must select at least 1 option.");
        return;
    }
     //moved number varialbe into if statment and used spread syntax
    if (numbers){
      var numbers =["0","1","2","3","4","5","6","7","8","9"];
      allCharacters=[...numbers,...allCharacters]; 
      //console.log(numbers);
    }
    //moved lowerCase varialbe into if statment and used spread syntax
    if (lowerCase){
      var lowerCase = ["a", "b","c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m","n", "o", "p", "q", "r", "s", "t", "u", "v","w","x","y","z"];
      allCharacters=[...lowerCase,...allCharacters];
      //console.log(lowerCase);
    }
    //moved upperCase varialbe into if statment and used spread syntax
    if (upperCase){
      var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M" , "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
      allCharacters=[...upperCase,...allCharacters];
      //console.log(upperCase);
    }
    //moved specialCharacters varialbe into if statment and used spread syntax
    if (specialCharacters){
      var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*","’", "(", ")", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "~", "{","}","[","]"];
      allCharacters=[...specialCharacters,...allCharacters];
      //console.log(specialCharacters);
    }
    //added this variable since other one was pulling from a global scope instead of local
    var finalPassword="";
    //for state to randomize all characters selected
    for(i=0; i<passwordLength; i++) {
      var index = Math.floor(Math.random() * allCharacters.length);
      
        finalPassword += allCharacters[index];
    }
    return finalPassword;

  }
    
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
