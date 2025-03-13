function removeFirstOccurrence(string, searchString) {
    return string.replace(searchString, '', 1);
}

// Contoh penggunaan
const result = removeFirstOccurrence("Hello world", "l");
console.log(result); // "Hel lo world"