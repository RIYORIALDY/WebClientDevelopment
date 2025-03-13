function removeFirstOccurrence(string: string, searchString: string): string {
    return string.replace(searchString, '', 1);
}

// Contoh penggunaan
const result: string = removeFirstOccurrence("Hello world", "l");
console.log(result); // "Hel lo world"