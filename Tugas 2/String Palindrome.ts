function isPalindrome(s: string): boolean {
    return s === s.split('').reverse().join('');
}

// Contoh penggunaan
console.log(`'madam' is palindrome: ${isPalindrome('madam')}`); // True