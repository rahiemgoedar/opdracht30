// Type your username and press enter
console.log("Enter username:")

// Create a string variable and get user input from the keyboard and store it in the variable
let userName = prompt("Wat is je naam?", "vul hier je naam in");

// Print the value of the variable (userName), which will display the input value
console.log("Username is: " + userName)

//groet persoon
alert(["hi " +  userName]);

//voer nummer in
let voerNummerIn = prompt("Voer een nummer in van 0 tot 25 om te beginnen met raden...");

const getRandomNumber = function (min, max) {
    
    return Math.random() * (max - min) + min;
  };