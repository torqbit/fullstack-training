# JavaScript Timers: Managing Time-Based Operations ⏰

JavaScript provides several timer functions to execute code after a delay or at regular intervals. These are essential for animations, polling, and managing time-sensitive operations.

## Types of Timers

### 1. setTimeout() - Execute Once After Delay

Executes a function once after a specified delay.

```typescript
// Basic setTimeout
setTimeout(() => {
  console.log("Executed after 2 seconds");
}, 2000);

// With parameters
function greet(name: string, greeting: string) {
  console.log(`${greeting}, ${name}!`);
}

setTimeout(greet, 1000, "John", "Hello");
```

## Practice Assignments: setTimeout in React/Next.js 🎯

### Assignment 1: Auto-Dismiss Notification

Create a notification component that automatically dismisses after a specified duration.

```typescript
interface NotificationProps {
  message: string;
  duration?: number;
  onDismiss: () => void;
}

// TODO: Create a Notification component that:
// - Shows a message
// - Automatically dismisses after duration (default 3000ms)
// - Allows manual dismissal
// - Cleans up timer on unmount
```

### Assignment 2: Delayed Search Input

Implement a search input that delays API calls until user stops typing.

```typescript
interface SearchInputProps {
  onSearch: (query: string) => Promise<void>;
  delay?: number;
}

// TODO: Create a SearchInput component that:
// - Accepts user input
// - Waits for user to stop typing (default 500ms)
// - Then triggers search
// - Cancels previous timeout if user types again
```

### Assignment 3: Countdown Button

Implement a button that shows countdown before enabling action.

```typescript
interface CountdownButtonProps {
  onComplete: () => void;
  duration?: number;
  text: string;
}

// TODO: Create a CountdownButton that:
// - Shows countdown in seconds
// - Disables interaction during countdown
// - Executes action after countdown
// - Resets on unmount
```

### Assignment 4: Timed Quiz Question

Create a quiz question component with time limit.

```typescript
interface QuizQuestionProps {
  question: string;
  options: string[];
  timeLimit: number;
  onTimeout: () => void;
  onAnswer: (answer: string) => void;
}

// TODO: Create a QuizQuestion component that:
// - Displays question and options
// - Shows remaining time
// - Auto-submits on timeout
// - Cancels timer if answered early
// - Cleans up on unmount
```
