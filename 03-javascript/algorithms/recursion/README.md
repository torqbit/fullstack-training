# Recursion in JavaScript: Functions Calling Themselves 🔄

Recursion is a programming concept where a function solves a problem by calling itself with a smaller version of the same problem. Think of it like a Russian nesting doll - each doll contains a smaller version of itself until you reach the smallest one.

## Understanding Recursion 🤔

Every recursive function has two main parts:

1. **Base Case**: The condition where the function stops calling itself
2. **Recursive Case**: Where the function calls itself with a modified input

## Practical Examples 🚀

### Example 1: Factorial Calculator

Calculate the factorial of a number (n!):

```javascript
function factorial(n) {
  // Base case
  if (n === 0 || n === 1) {
    return 1;
  }
  // Recursive case
  return n * factorial(n - 1);
}

console.log(factorial(5)); // Output: 120 (5 * 4 * 3 * 2 * 1)
```

### Example 2: Fibonacci Sequence

Generate the nth Fibonacci number:

```javascript
function fibonacci(n) {
  // Base case
  if (n <= 1) {
    return n;
  }
  // Recursive case
  return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(6)); // Output: 8 (0 + 1 + 1 + 2 + 3 + 5)
```

### Example 3: Directory Tree Explorer

Recursively explore a directory structure:

```javascript
function exploreDirectory(directoryPath) {
  // Base case: if directory is empty
  if (!fs.existsSync(directoryPath)) {
    return;
  }
  const files = fs.readdirSync(directoryPath);
  for (const file of files) {
    const filePath = path.join(directoryPath, file);
    if (fs.statSync(filePath).isDirectory()) {
      // Recursive case: if it's a directory, explore it
      exploreDirectory(filePath);
    } else {
      // Base case: if it's a file, print its path
      console.log(filePath);
    }
  }
}
```
