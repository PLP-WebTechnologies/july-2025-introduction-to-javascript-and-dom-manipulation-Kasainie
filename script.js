// --- Part 1: Mastering JavaScript Basics ---
console.log("--- Part 1: JavaScript Basics ---");

// Variable declarations with different data types
let userName = "Alex"; // String
let userAge = 30; // Number
let hasLicense = true; // Boolean

// Conditional statement
if (hasLicense && userAge >= 16) {
    console.log(`${userName} is ${userAge} years old and can drive.`);
} else if (hasLicense) {
    console.log(`${userName} has a license but might be too young to drive.`);
} else {
    console.log(`${userName} is not old enough or does not have a license.`);
}

// --- Part 2: JavaScript Functions ---
console.log("\n--- Part 2: Functions ---");

// Custom Function 1: Calculates the sum of two numbers
function addNumbers(a, b) {
    return a + b;
}

let sum = addNumbers(15, 25);
console.log(`The sum of 15 and 25 is: ${sum}`);

// Custom Function 2: Updates the welcome message on the page
function updateWelcomeMessage() {
    let welcomeElement = document.getElementById('welcome-message');
    welcomeElement.textContent = "Welcome to my JavaScript Assignment!";
}

// --- Part 3: JavaScript Loops ---
console.log("\n--- Part 3: Loops ---");

// Loop 1: Iterate through an array of colors
let colors = ["red", "green", "blue", "yellow"];
console.log("Using a for...of loop:");
for (let color of colors) {
    console.log(color);
}

// Loop 2: A simple for loop to add items to the dynamic list
let dynamicList = document.getElementById('dynamic-list');
let loopItems = ["Apple", "Banana", "Cherry"];

for (let i = 0; i < loopItems.length; i++) {
    let newItem = document.createElement('li');
    newItem.textContent = `Loop Added: ${loopItems[i]}`;
    dynamicList.appendChild(newItem);
}

// --- Part 4: Mastering the DOM ---
console.log("\n--- Part 4: DOM Manipulation ---");

// Interaction 1: Change text on button click
let domButton = document.getElementById('dom-button');
let textToChange = document.getElementById('text-to-change');

domButton.addEventListener('click', function() {
    textToChange.textContent = "You clicked the button and changed my text!";
});

// Interaction 2: Change the title's color using the button
let colorButton = document.getElementById('color-button');
let mainTitle = document.getElementById('main-title');

colorButton.addEventListener('click', function() {
    mainTitle.style.color = "purple";
});

// Interaction 3: Use the function from Part 2 to update the welcome message when the page loads
updateWelcomeMessage();
