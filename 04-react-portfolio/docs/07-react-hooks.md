# Understanding useRef in React

## What is useRef?

`useRef` is a React Hook that provides a way to create a mutable reference that persists across component re-renders. Unlike state variables, updating a ref doesn't trigger a re-render. Common use cases include:

- Accessing DOM elements directly
- Storing previous values
- Holding mutable values that don't require re-rendering

## Practical Example

```typescript
import React, { useRef, useEffect, useState } from "react";

function VideoPlayer() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div>
      <video ref={videoRef} src='https://example.com/video.mp4' width='400' />
      <button onClick={handlePlayPause}>{isPlaying ? "Pause" : "Play"}</button>
    </div>
  );
}
```

## Practice Assignments

### 1. Focus Management

Create a form where clicking a "Focus" button automatically focuses on a specific input field.

Requirements:

- Create a form with multiple input fields
- Add a button that focuses on a specific input when clicked
- Add a button to focus on the next input field
- Implement error handling if the ref is null

```tsx
import React, { useRef } from "react";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

export const FocusManagement: React.FC = () => {
  // Refs for form inputs
  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);

  // TODO: Implement form state management
  const [formData, setFormData] = React.useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  // TODO: Implement focus handling for specific input
  const focusInput = (inputRef: React.RefObject<HTMLInputElement>) => {};

  // TODO: Implement focus next input functionality
  const focusNextInput = (currentRef: React.RefObject<HTMLInputElement>) => {};

  // TODO: Implement form submission
  const handleSubmit = (e: React.FormEvent) => {};

  // TODO: Implement input change handler
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {};

  return (
    <div>
      <h2>Focus Management Form</h2>
      <form onSubmit={handleSubmit}>{/* TODO: Implement form fields */}</form>

      <div>{/* TODO: Implement focus control buttons */}</div>
    </div>
  );
};
```

### 2. Stopwatch Implementation

Build a stopwatch using useRef to track intervals.

Requirements:

- Display time in HH:MM:SS format
- Implement Start, Stop, and Reset functionality
- Use useRef to store the interval ID
- Ensure proper cleanup in useEffect

```tsx
import React, { useRef, useEffect, useState } from "react";

export const Stopwatch: React.FC = () => {
  // State for time tracking
  const [time, setTime] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  // Ref for interval ID
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Format time to HH:MM:SS
  const formatTime = (timeInSeconds: number): string => {};

  // Start the stopwatch
  const handleStart = (): void => {};

  // Stop the stopwatch
  const handleStop = (): void => {};

  // Reset the stopwatch
  const handleReset = (): void => {};

  // Cleanup effect
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <div>
      <h2>Stopwatch</h2>
      <div className='time-display'>{formatTime(time)}</div>
      <div className='controls'>
        <button onClick={handleStart} disabled={isRunning}>
          Start
        </button>
        <button onClick={handleStop} disabled={!isRunning}>
          Stop
        </button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};
```

### 3. Scroll Position Tracker

Create a component that tracks and displays the current scroll position of a container.

Requirements:

- Create a scrollable container with content
- Display the current scroll position
- Add a "Scroll to Top" button
- Implement smooth scrolling behavior

### 4. Image Lazy Loading

Implement an image lazy loading component using Intersection Observer and useRef.

Requirements:

- Create a component that loads images only when they enter the viewport
- Show a placeholder while images are loading
- Handle loading errors gracefully
- Implement a loading animation

### 5. Multi-step Form with Focus Management

Create a multi-step form where each step automatically focuses on the first input.

Requirements:

- Create a form with at least 3 steps
- Automatically focus on the first input of each step
- Implement form validation
- Store form data between steps
- Add navigation between steps
