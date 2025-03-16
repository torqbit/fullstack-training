# Understanding JavaScript Event Loop and Promises 🔄

## The Event Loop 🎡

The Event Loop is JavaScript's mechanism for handling asynchronous operations. It continuously checks the call stack and callback queue, executing code in a non-blocking way.

### How it Works:

1. Code executes in the call stack
2. Async operations are delegated to Web APIs
3. Callbacks are queued in the callback queue
4. Event loop checks if call stack is empty
5. If empty, moves callbacks from queue to stack

## Promises: Managing Async Operations 🤝

Promises are objects representing the eventual completion (or failure) of an asynchronous operation. They help avoid callback hell and make async code more manageable.

### Promise States:

- Pending: Initial state
- Fulfilled: Operation completed successfully
- Rejected: Operation failed

## Practical Examples 🚀

### Example 1: Basic Promise

```typescript
function delay(ms: number): Promise<void> {
  return new Promise<void>((resolve) => {
    setTimeout(resolve, ms);
  });
}

// Usage
console.log("Starting...");
delay(2000)
  .then(() => console.log("2 seconds passed!"))
  .catch((error: Error) => console.error("Something went wrong:", error));
```

### Example 2: API Call with Fetch

```js
function fetchUserData(userId) {
  return fetch(`https://api.example.com/users/${userId}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .catch((error) => {
      console.error("Error fetching user:", error);
      throw error;
    });
}

// Usage with async/await
async function displayUser(userId) {
  try {
    const user = await fetchUserData(userId);
    console.log("User data:", user);
  } catch (error) {
    console.error("Failed to display user:", error);
  }
}
```

## Practice Assignments 📚

### Assignment 1: Timer Promise

Create a timer utility that returns a Promise which resolves after a specified time.

```typescript
interface TimerOptions {
  message: string;
  delay: number;
}

// TODO: Implement createTimer function that returns a Promise
// The promise should resolve with the message after the specified delay
```
