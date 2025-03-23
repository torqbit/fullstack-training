# Understanding JavaScript Promises 🤝

## What is a Promise?

A Promise is an object representing the eventual completion (or failure) of an asynchronous operation. It serves as a proxy for a value that may not be available immediately.

## Promise States

1. **Pending**: Initial state, neither fulfilled nor rejected
2. **Fulfilled**: Operation completed successfully
3. **Rejected**: Operation failed
4. **Settled**: Promise is either fulfilled or rejected

## Creating Promises

### Basic Promise Creation

```typescript
const myPromise = new Promise<string>((resolve, reject) => {
  // Async operation
  if (/* operation successful */) {
    resolve('Success!');
  } else {
    reject(new Error('Failed!'));
  }
});
```

### Promise Methods

#### then()

Handles successful completion

```typescript
myPromise.then((result) => {
  console.log(result); // 'Success!'
});
```

#### catch()

Handles errors

```typescript
myPromise.catch((error) => {
  console.error(error.message); // 'Failed!'
});
```

#### finally()

Executes regardless of success or failure

```typescript
myPromise.finally(() => {
  console.log("Promise settled");
});
```

### Promise Chaining

```typescript
fetchUserData(userId)
  .then((user) => fetchUserPosts(user.id))
  .then((posts) => fetchPostComments(posts[0].id))
  .catch((error) => console.error(error));
```

## Async/Await

Modern syntax for working with promises

```typescript
async function getUserData() {
  try {
    const user = await fetchUserData(userId);
    const posts = await fetchUserPosts(user.id);
    const comments = await fetchPostComments(posts[0].id);
    return comments;
  } catch (error) {
    console.error(error);
  }
}
```

## Practice Assignments: Promises 🎯

### Assignment 1: Delayed Greeting

Create a function that returns a promise which resolves with a greeting after a delay.

```typescript
interface GreetingConfig {
  name: string;
  delay: number;
  language?: "en" | "es" | "fr";
}

// TODO: Implement delayedGreeting that:
// - Takes GreetingConfig as parameter
// - Returns Promise<string>
// - Resolves with greeting in specified language
// - Rejects if delay is negative
```

### Assignment 2: Random Number Generator

Create a promise that generates a random number within a range.

```typescript
interface RandomConfig {
  min: number;
  max: number;
  delay?: number;
}

// TODO: Implement randomNumberPromise that:
// - Takes RandomConfig as parameter
// - Returns Promise<number>
// - Generates number after specified delay
// - Validates input range
```

### Assignment 3: Basic Data Fetcher

Create a function to fetch and type data from an API.

```typescript
interface User {
  id: number;
  name: string;
  email: string;
}

// TODO: Implement fetchUsers that:
// - Fetches users from 'https://jsonplaceholder.typicode.com/users'
// - Returns Promise<User[]>
// - Handles network errors
// - Validates response data
```

### Assignment 4: Parallel Posts Fetcher

Create a function to fetch multiple posts simultaneously.

```typescript
interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

// TODO: Implement fetchUserPosts that:
// - Takes array of userIds
// - Fetches posts for each user in parallel
// - Returns Promise<Post[]>
// - Combines results in single array
```

### Assignment 5: Comments Fetcher with Timeout

Create a function to fetch comments with timeout protection.

```typescript
interface Comment {
  id: number;
  postId: number;
  name: string;
  email: string;
  body: string;
}

interface FetchConfig {
  postId: number;
  timeout?: number;
  maxComments?: number;
}

// TODO: Implement fetchPostComments that:
// - Takes FetchConfig as parameter
// - Returns Promise<Comment[]>
// - Implements timeout
// - Limits number of comments
```
