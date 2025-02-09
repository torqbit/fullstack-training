# Queue Data Structure in JavaScript: The Line-Up Chronicles 🚶‍♂️🚶‍♀️

Imagine you're at the grand opening of the world's first "Queue Café," where the only thing on the menu is the experience of standing in line. Yes, you heard it right! It's a café where the main attraction is the queue itself. Welcome to the Queue Café, where the First-In-First-Out (FIFO) principle reigns supreme!

## The Queue Café Experience ☕

As you enter the Queue Café, you're greeted by a friendly host who explains the rules: "Here at Queue Café, the first person to join the line is the first to be served. It's all about fairness and order!"

### The Line-Up

1. **Alice** arrives first, eager to experience the novelty of standing in line. She takes her place at the front.
2. **Bob** follows, joining the line behind Alice, wondering if there's a secret menu.
3. **Charlie** enters next, excitedly chatting about the latest queue trends.
4. **Daisy** joins the line, curious about what happens at the end.

As more people join, the line grows longer, and the anticipation builds. The Queue Café is buzzing with excitement!

### The Queue Mechanism

In JavaScript, a queue is a linear data structure that follows the FIFO principle. Just like at the Queue Café, the first person (or element) to join the queue is the first to leave.

- **Enqueue**: Adding a new person to the end of the line.
- **Dequeue**: Serving the person at the front of the line, allowing them to leave.
- **Peek**: Checking who's next in line without serving them.

### The Grand Finale 🎉

Finally, it's time for Alice to be served. She steps forward, receives her "Queue Experience Certificate," and exits the line with a smile. Bob, Charlie, and Daisy follow in order, each receiving their certificate and leaving the café with a newfound appreciation for the art of queuing.

And so, the Queue Café continues to delight visitors with its simple yet satisfying experience, one person at a time.

Remember, in the world of queues, patience is a virtue, and everyone gets their turn!

---

Here are five assignments designed to practice the queue data structure in JavaScript

### Assignment 1: Implement a Basic Queue

**Objective:** Create a basic queue class in JavaScript.

**Instructions:**

- Implement a `Queue` class with methods `enqueue`, `dequeue`, `peek`, and `isEmpty`.
- Test the queue by enqueuing and dequeuing some elements.

### Assignment 2: Reverse a Queue

**Objective:** Reverse the elements of a queue.

**Instructions:**

- Create a function `reverseQueue(queue)` that takes a queue as input.
- Use a stack to reverse the order of elements in the queue.
- Return the reversed queue.

### Assignment 3: Check Palindrome Using Queue

**Objective:** Use a queue to check if a string is a palindrome.

**Instructions:**

- Create a function `isPalindrome(input)` that takes a string as input.
- Use a queue to check if the string reads the same forward and backward.
- Return `true` if it is a palindrome, otherwise `false`.

### Assignment 4: Implement a Circular Queue

**Objective:** Implement a circular queue with a fixed size.

**Instructions:**

- Create a `CircularQueue` class with methods `enqueue`, `dequeue`, `peek`, `isEmpty`, and `isFull`.
- Ensure that the queue wraps around when it reaches the end of the array.
- Test the circular queue with various operations.

### Assignment 5: Queue Simulation

**Objective:** Simulate a simple queue system, such as a ticket counter.

**Instructions:**

- Create a function `simulateQueue(customers, serviceTime)` where `customers` is an array of customer names and `serviceTime` is the time taken to serve each customer.
- Use a queue to simulate the serving process, printing each customer's name as they are served.
- Return the total time taken to serve all customers.

These assignments cover various aspects of queue operations and applications, helping to reinforce the understanding of queue data structures in JavaScript.
