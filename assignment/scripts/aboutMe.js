// REQUIRED FEATURES:
// 1 - Create a variable called `firstName` and assign it the value of your first name
let firstName = "Patty";
console.log(firstName);

// 2 - Create a second variable called `lastName` and assign it the value of your last name
let lastName = "Baraibar";
console.log(lastName);

// 3 - Create a third variable called `fullName`, assign it the value of your first and last name
// (remember, you already have variables for this, can you use those?)
let fullName = firstName + " " + lastName;
console.log(fullName);

// 4 - Console log the value of `fullName`
console.log(fullName);

// 5 - Create a variable called `luckyNumber` and assign it the value of your lucky number.
let luckyNumber = 9;
console.log(9);

// 6 - Console log this sentence, adding in the variables you created above:
// 'My name is (full name), and I think (lucky number) is a winner!'.
sentence = 'My name is ' + firstName + ' and I think ' + luckyNumber + ' is a winner!';
console.log(sentence);
// Refer back to the videos if you need help with this one.

// 7 - Create a variable named `adventurous` and set it to a boolean value (true or false)
let adventurous = true;
console.log(adventurous);

// 8 - Create a variable named `food`, and set its value to a string of your favorite food
let food = "Gelato";
console.log(food);

// 9 - Create a variable called `pets` and set it to the value of the number of pets you have
let pets = 0;
console.log(0);

// 10 - Create a variable called `friendsPets` and assign it the value of the number of pets your friend has
let friendsPets = 2;
console.log(2);

// 11 - Add two pets to your `pets` variable
friendsPets += 2;
console.log(friendsPets);

// 12 - Create a constant variable called `allowedPets` and set it to a number value of your choice
const allowedPets = 3;

// 13 - Create a conditional: if adventurous is true, console log "Adventures are great!",
// if it's not true, console log "How about we stay home?"


if(adventurous = true){
    console.log("Adventures are great!");
} else {
  console.log("How about we stay home?");
}



// 14 - Create a compound conditional: if luckyNumber is 2 and adventurous is true,
// console log "Roll the dice!"

luckyNumber = 2;
adventurous = true;

if (luckyNumber == 2 && adventurous == true)
console.log("Roll the dice!");


// 15 - Write a conditional that console logs "I can have more pets!"
//if the value of `pets` is less than the value of `allowedPets`,
// console logs "I have enough pets" if the value of `pets` is equal to the value of `allowedPets`,
// and console logs "Oh no, I have too many pets!"
// if the value of `pets` is greater than the value of `allowedPets`.

if(pets < allowedPets){
  console.log("I can have more pets!");
} else if (pet == allowedPets) {
  console.log("I have enough pets");
} else {
  console.log("Oh now, I have too many pets!");
}


// STRETCH GOALS:

// 16 - Make a variable called `mostPets` and a conditional that
// correctly checks the `pets` and `friendsPets` variables, and
// assigns the highest value to `mostPets`. There's several possibilities --
// be sure to think through all the scenarios.
// console.log `mostPets` after the conditional has run.

let mostPets = 5;
console.log(mostPets);

if(pets == 0 && friendsPets == 4 && mostPets > friendsPets){
  console.log(mostPets);
}


// 17 - Rewrite question 16 with a `switch` statement. You'll need to do research!

mostPets = 5;

switch (5) {
  case 0:
  console.log("You have no pets");
  break;
  case 4:
  console.log("You have plenty but not the most");
  break;
  case 5:
  console.log("You have the most pets!");
  break;
  default:
  console.log("Let's adopt a pet!");
}

// 18 -- Rewrite question 13 with a `ternary` operator. You'll need to do research!


    console.log((adventurous = true) ? "Adventures are great!" : "How about we stay home?");
