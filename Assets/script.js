//I've left thorough comments for the sake of explaining each section of code.
//Each instance of the console.log() method is not necessary for the functioning of the code.
//Nonetheless, these logs allow the user/me to see what information is being stored through each part of the program.

// establish the global variables that will be used later.
var length;
var charType;
var output;
var final;
var allRandom;
var types;

// create strings of text for random string generators to call upon
var alpha= "abcdefghijklmnopqrstuvwxyz";
var ALPHA= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numeral= "0123456789";
var special= " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

// produces a random number. Math.floor rounds numbers down to nearest integer (the "floor"). Math.random() generates a random number greater than or equal to 0 and less than 1.
// The use of these functions in conjunction allows for a function that returns a random number between 0 and the number given as the 'max' (in this case).
// For example, if the 'max' that is given for the function is 10 (randnum(10)), and Math.random() may produce .89. .89 will be multiplied by 10, resulting in 8.9. The Math.floor() method will then convert this number to 8 (it chops off the decimal/fraction).
// These three lines of code were borrowed from an MDN web doc on the Math.random() method (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)
function randnum(max){
  return Math.floor(Math.random() * max);
};

// generates a random string of text composed of characters from the array selected in place of 'b'. 
// First, the string of characters is split into an array of characters. 
// The a.toSpliced() method will then choose characters from the resulting array at random.
// Due to the enclosed while loop, this process will repeat until the length of the resulting string is equivalent to the length previously input by the user.
function superGen(b) {
  var a= b.split('');
  var output= a.toSpliced(0,a.length,a[randnum(a.length)])
  while ((output.length)<length) {
  output=output + a.toSpliced(0,a.length,a[randnum(a.length)])
  }
  console.log(output)
  return output;
};

// This mega-function generates the password. It will be called when the "Generate Password" button is clicked.
function generatePassword () {
  var allRandom;
  var final;
  window.alert("Please select the criteria you would like applied to your password");

  // Math.trunc forces input to round down to nearest integer
  // while loop prompts user to input a number until response is within parameters. 
  function getLength(){
    length=Math.trunc(prompt("Please choose the number of characters you would like to use in your passcode, between 8 and 128."))
    while (!((length >= 8)&&(length <= 128))) {
      length=Math.trunc(window.prompt("Please choose a number between 8 and 128"))
    }
    console.log("length set as " + length)
    window.confirm("You chose " + length + " as your length. Click OK to continue.") 
    return length;
  };
  
  // Allows user to choose which character sets they would like to be included in their randomly-generated password. A confirm() window will let user know what was logged as their response.
  // A response that does not specify at least one of the requested letters (U,L,N, or S) will result in a confirmation that all criteria are being selected (as a default).
  function getChartypes(){
    types=(prompt("Would you like to include uppercase letters [U], lowercase letters [L], numerals (0-9) [N], and/or special characters [S](!#$%&'()*+,-./:;<=>?@[\]^_`{|}~)? Please respond with the specified letter(s) in brackets [U,L,N,S]. A response that does not include any of these letters will default in choosing ALL criteria."));
    types=types.toUpperCase();
    types=types.split("");  
    console.log("User chose " + types + ".");
    if (types.includes("U")||types.includes("L")||types.includes("N")||types.includes("S")){
    window.confirm("You chose " + types + ". Click OK to continue.") 
    }else {
      window.confirm("You chose ALL types. Click OK to continue.")
    };
    return types;
  }
  
  // This function carries out the input of the user for the character set prompt. 
  // If the user response for getChartypes() includes any of these letters, the corresponding character set(s) will be included in the bank of random characters that will be drawn on for the final password.
  function useChartypes() {
    allRandom="";
    if (types.includes("U")) {
      allRandom= allRandom + superGen(ALPHA)
    }
    if (types.includes("L")) {
      allRandom= allRandom + superGen(alpha)
    }
    if (types.includes("N")) {
      allRandom= allRandom + superGen(numeral)
    }
    if (types.includes("S")) {
      allRandom= allRandom + superGen(special)
    }else if (!(types.includes("U")||types.includes("L")||types.includes("N")||types.includes("S"))){
      allRandom=allRandom+ superGen(alpha) + superGen(ALPHA) + superGen(numeral) + superGen(special)
    };
    return allRandom;
  }
  
  // This function takes the "allRandom" string that results from the concatenation of the strings that were randomly generated from the character sets that the user chose to include.
  // It uses this "allRandom" in the superGen() random generator function, resulting finally in a random password, the length of which is equivalent to the length originally input by the user.
  function finalPassword () {
    final=superGen(allRandom);
    return final;
  }

  // The following lines are calling the previously established functions in the order in which they need to be executed. 
  // Length will be requested, then desired character types to include. (getLength() and getChartypes())
  // Character-types response will be checked and yield a string of random characters, equal to the length input by user multiplied by the number of character sets selected. (useChartypes())
  // Finally, this mega-string will be used to generate the final password, selecting characters from the string at random, and resulting in a password equal in length to the length set by user. (finalPassword())
  // The last line, 'return final', will log the resulting password as the value of the variable "final".
  length= getLength();
  types= getChartypes();
  allRandom=useChartypes();
  console.log(allRandom);
  final=finalPassword();
  return final;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// What is returned from the generatePassword() function will become the value for the variable "password".
// passwordText initially appears as "Your Secure Password", as determined in the HTML document.
// However, after "password" acquires a value from generatePassword(), the password that is returned will appear in the box, as the "passwordText".
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// Add event listener to generate button
// This makes the "Generate Password" button respond to a "click" by executing the writePassword() function.
generateBtn.addEventListener("click", writePassword);
