function estimateTransactionFee(amountToSend) {
  const feePercentage = 0.015;
  let fee = amountToSend * feePercentage;

  if (fee < 10) {
    fee = 10;
  } else if (fee > 70) {
    fee = 70;
  }

  const totalDebited = amountToSend + fee;

  console.log(`\nYou are sending: KES ${amountToSend}`);
  console.log(`Transaction fee: KES ${fee}`);
  console.log(`Total amount debited from your account: KES ${totalDebited}`);
  console.log("Thank you for using our mobile money service! 📱");
}

const input = prompt("Enter the amount you wish to send:");
const amount = parseFloat(input);

if (!isNaN(amount) && amount > 0) {
  estimateTransactionFee(amount);
} else {
  console.log("Please enter a valid amount greater than 0. Asante!");
}
