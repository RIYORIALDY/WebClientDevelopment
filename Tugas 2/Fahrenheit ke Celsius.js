function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

// Contoh penggunaan
const tempF = 100; // Input suhu dalam Fahrenheit
const tempC = fahrenheitToCelsius(tempF);
console.log(`Suhu dalam Celsius: ${tempC.toFixed(2)}°C`);