function fahrenheitToCelsius(fahrenheit: number): number {
    return (fahrenheit - 32) * 5 / 9;
}

// Contoh penggunaan
const tempF: number = 100; // Input suhu dalam Fahrenheit
const tempC: number = fahrenheitToCelsius(tempF);
console.log(`Suhu dalam Celsius: ${tempC.toFixed(2)}°C`);
// Output: Suhu dalam Celsius: 37.78°C