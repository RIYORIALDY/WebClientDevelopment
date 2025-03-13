function isPalindrome(s) {
    return s === s.split('').reverse().join('');
}

// Contoh penggunaan
console.log(`'madam' is palindrome: ${isPalindrome('madam')}`); // True