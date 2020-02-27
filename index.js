// Link a JavaScript file that will mimic the bahavior of a contact form using multiple prompts

// console.log("I got this");

// Prompt for person's name
// Prompt for person's email
// Prompt for a contact message

// I prompted the user to enter information 
let userInputName = prompt("Enter Name");
let userInputEmail = prompt("Enter Email");
let userInputMessage= prompt('Enter Contact');

// used console log to check if my prompts worked
console.log(`${userInputName}\n ${userInputEmail}\n${userInputMessage}`);


// The user should not be able to leave any of the 3 prompts blank and your program should continue to ask for the inputs until a value has been provided for all of them

// Used a variable ti input data
 let userInput = prompt("");
//  used a loop 
 while ("") {
        return userInput
 }

if (userInput == "X") {
        console.log(` ${userInput}`);
 }
 
let inputArray = ['Name','Email','Contact'];
for(let i = 0; i < inputArray.length; i++){
   console.log(inputArray[i]);
}
inputArray('userInput');

function (inputArray){
   if (){
       confirm(`Thank You ${inputArray}`)
       
   }
   else (){
       confirm(`Mabye Next Time ${inputArray}`){

       }

   } 
}
    




// Each of the 3 inputs should be stored into an array

// After all 3 inputs have been provided, display the entered items in a confirm dialog asking them to confirm they want to contact you

// If the user selects to confirm submisson, display an alert box thanking them for contacting you and print the collected contact data from the array in the console

// If the user cancels the submisson display an alert box that says Maybe Next Time