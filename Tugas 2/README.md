# Exercise Solutions JavaScript and TypeScript

This repository contains solutions for two exercises: Temperature Conversion and Other Tasks (Exercise 1), and Git Repository Management (Exercise 2).  Solutions are provided in both JavaScript and TypeScript.

## Table of Contents

- [Exercise 1: Temperature Conversion and Other Tasks](#exercise-1-temperature-conversion-and-other-tasks)
    - [Fahrenheit to Celsius Conversion](#fahrenheit-to-celsius-conversion)
    - [Centimeter to Kilometer Conversion](#centimeter-to-kilometer-conversion)
    - [Even/Odd Number Check](#evenodd-number-check)
    - [Remove First Occurrence of Substring](#remove-first-occurrence-of-substring)
    - [Palindrome Check](#palindrome-check)
- [Exercise 2: Git Repository Management](#exercise-2-git-repository-management)


## Exercise 1: Temperature Conversion and Other Tasks

This exercise involves writing functions for various tasks, including temperature conversion, unit conversion, and string manipulation.  Solutions are provided for both JavaScript and TypeScript, demonstrating type safety and code clarity in TypeScript.

### Fahrenheit to Celsius Conversion

**JavaScript:**

```javascript
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

// Example usage
const tempF = 100; // Input temperature in Fahrenheit
const tempC = fahrenheitToCelsius(tempF);
console.log(`Temperature in Celsius: ${tempC.toFixed(2)}°C`);
```

**TypeScript:**

```typescript
function fahrenheitToCelsius(fahrenheit: number): number {
    return (fahrenheit - 32) * 5 / 9;
}

// Example usage
const tempF: number = 100; // Input temperature in Fahrenheit
const tempC: number = fahrenheitToCelsius(tempF);
console.log(`Temperature in Celsius: ${tempC.toFixed(2)}°C`);
```

### Centimeter to Kilometer Conversion

**JavaScript:**

```javascript
function cmToKm(cm) {
    return cm / 100000;
}

function kmToCm(km) {
    return km * 100000;
}

// Example usage
console.log(`100000 cm = ${cmToKm(100000)} km`);
console.log(`1 km = ${kmToCm(1)} cm`);
```

**TypeScript:**

```typescript
function cmToKm(cm: number): number {
    return cm / 100000;
}

function kmToCm(km: number): number {
    return km * 100000;
}

// Example usage
console.log(`100000 cm = ${cmToKm(100000)} km`);
console.log(`1 km = ${kmToCm(1)} cm`);
```

### Even/Odd Number Check

**JavaScript:**

```javascript
function isEven(n) {
    return n % 2 === 0;
}

// Example usage
console.log(`1000 isEven: ${isEven(1000)}`); // True
console.log(`1001 isEven: ${isEven(1001)}`); // False
```

**TypeScript:**

```typescript
function isEven(n: number): boolean {
    return n % 2 === 0;
}

// Example usage
console.log(`1000 isEven: ${isEven(1000)}`); // True
console.log(`1001 isEven: ${isEven(1001)}`); // False
```

### Remove First Occurrence of Substring

**JavaScript:**

```javascript
function removeFirstOccurrence(string, searchString) {
    return string.replace(searchString, '', 1);
}

// Example usage
const result = removeFirstOccurrence("Hello world", "l");
console.log(result); // "Hel lo world"
```

**TypeScript:**

```typescript
function removeFirstOccurrence(string: string, searchString: string): string {
    return string.replace(searchString, '', 1);
}

// Example usage
const result: string = removeFirstOccurrence("Hello world", "l");
console.log(result); // "Hel lo world"
```

### Palindrome Check

**JavaScript:**

```javascript
function isPalindrome(s) {
    return s === s.split('').reverse().join('');
}

// Example usage
console.log(`'madam' is palindrome: ${isPalindrome('madam')}`); // True
```

**TypeScript:**

```typescript
function isPalindrome(s: string): boolean {
    return s === s.split('').reverse().join('');
}

// Example usage
console.log(`'madam' is palindrome: ${isPalindrome('madam')}`); // True
```

## Exercise 2: Git Repository Management

This exercise demonstrates basic Git commands for managing a repository.

### 1. Initialize Repository

```bash
mkdir my_repository
cd my_repository
git init
```

### 2. Make Changes and Commit

```bash
echo "Hello World" > file.txt
git add file.txt
git commit -m "Adding file.txt with Hello World content"
```

### 3. Create a New Branch and Switch Branches

```bash
git checkout -b new_branch
echo "Changes in new branch" >> file.txt
git add file.txt
git commit -m "Adding changes in new_branch"
git checkout main
```

### 4. Make Changes and Commit in the New Branch

```bash
git checkout new_branch
echo "Additional changes" >> file.txt
git add file.txt
git commit -m "Adding additional changes in new_branch"
```

### 5. Create a Pull Request

```bash
# After pushing to GitHub
# Create a pull request from new_branch to main
```

These commands provide a basic workflow for managing a Git repository. Remember to adapt these commands to your specific needs.