// Array of battery batches
const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Use reduce to sum the total batteries
const totalBatteries = batteryBatches.reduce((total, batch) => total + batch, 0);

// Display the result in the browser
document.getElementById("total").textContent = totalBatteries;
