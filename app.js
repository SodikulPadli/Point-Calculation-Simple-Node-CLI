const readline = require('readline');

// Create a new interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Declare the order object
let order = {
  totalAmountTransactions: 0,
  totalPoints: 0,
  totalItems: 0
};

// Print the prompt
console.log('Masukkan data order (nama barang dan harga):');
rl.prompt();

// Handle the input
rl.on('line', (input) => {
  // Split the input into name and price
  let [name, price] = input.split(' ');

  // Check if the input is valid
  if (!name || !price || isNaN(price)) {
    console.log('Input tidak valid. Silakan coba lagi.');
  } else {
    // Update the order object
    order.totalAmountTransactions += parseInt(price);
    order.totalItems++;

    // Calculate the points
    let multiplier = 1;
    if (order.totalAmountTransactions > 1000000) {
      multiplier = 1.05;
    }
    if (order.totalAmountTransactions > 10000000) {
      multiplier = 1.1;
    }
    if (order.totalAmountTransactions > 20000000) {
      multiplier = 1.2;
    }
    if (order.totalAmountTransactions > 30000000) {
      multiplier = 1.3;
    }
    if (order.totalAmountTransactions > 40000000) {
      multiplier = 1.4;
    }
    order.totalPoints += Math.floor(order.totalAmountTransactions / 10000) * multiplier;

    // Print the order object
    console.log(`Order saat ini: ${JSON.stringify(order)}`);
  }

  // Print the prompt again
  rl.prompt();
});

// Handle the close event
rl.on('close', () => {
  console.log('Terima kasih telah menggunakan aplikasi ini!');
});
