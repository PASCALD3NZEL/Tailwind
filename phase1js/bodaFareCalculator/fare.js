function calculateBodaFare(distanceInKm) {
  const baseFare = 50;       // KES 50 flat fare
  const chargePerKm = 15;    // KES 15 per km

  const totalFare = baseFare + (distanceInKm * chargePerKm);

  console.log(`\nFor a trip of ${distanceInKm} km, your estimated boda boda fare is: KES ${totalFare}.`);
  console.log("Safe travels! 🛵");
}

const input = prompt("Welcome! Please enter your boda boda trip distance in kilometers:");
const distance = parseFloat(input);

if (!isNaN(distance) && distance > 0) {
  calculateBodaFare(distance);
} else {
  console.log("Oops! Please enter a valid distance in kilometers. Asante!");
}
