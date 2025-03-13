function cmToKm(cm: number): number {
    return cm / 100000;
}

function kmToCm(km: number): number {
    return km * 100000;
}

// Contoh penggunaan
console.log(`100000 cm = ${cmToKm(100000)} km`);
console.log(`1 km = ${kmToCm(1)} cm`);