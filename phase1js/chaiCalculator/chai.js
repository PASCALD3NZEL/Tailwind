function calculateChaiIngredients(numberOfCups) {
  const water = numberOfCups * 200;
  const milk = numberOfCups * 50;
  const tea = numberOfCups * 1;
  const sugar = numberOfCups * 2;

  console.log(`\nTo make ${numberOfCups} cup${numberOfCups === 1 ? '' : 's'} of Kenyan Chai, you will need:`);
  console.log(`Water: ${water} ml`);
  console.log(`Milk: ${milk} ml`);
  console.log(`Tea Leaves (Majani): ${tea} tablespoon${tea === 1 ? '' : 's'}`);
  console.log(`Sugar (Sukari): ${sugar} teaspoon${sugar === 1 ? '' : 's'}`);
  console.log("\nEnjoy your Chai Bora! ☕");
}

const input = prompt("Heyyyy!!Welcome. How many cups of Chai Bora would you like to be processed?");
const cups = parseInt(input);

if (!isNaN(cups) && cups > 0) {
  calculateChaiIngredients(cups);
} else {
  console.log("Please enter a valid number of cups. Asante!");
}
