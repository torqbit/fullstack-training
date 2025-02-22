import { Stack } from "../stack/stack.mjs";
// Queue class for basic queue operations
export class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element)
  }

  dequeue() {
    return this.items.shift()
  }

  peek() {
    if (this.items.length != 0){
     return this.items[0]
    }
    else{
      return 'Queue is empty'
    }
  }

  isEmpty() {
    if (this.items.length == 0){
      return true
    }
    else{
      return false
    }
  }
}

// Function to reverse a queue
export function reverseQueue(queue) {
  const stack = new Stack();
  const obj = new Queue()
  for(let i in queue){
    obj.enqueue(queue[i])
  }
  while (!obj.isEmpty()) {
    stack.push(obj.dequeue());
  }
  const reversed = [];
  while (!stack.isEmpty()) {
    reversed.push(stack.pop());
  }
  return reversed;
}
// Function to check if a string is a palindrome using a queue
export function isPalindrome(input) {
  const strSplit = [...input]
  console.log(typeof(strSplit))
  console.log(typeof(reverseQueue(input)))
  console.log(strSplit)
  console.log(reverseQueue(input))
  if (strSplit == reverseQueue(input)){
    return 'it is a palindrone'
  }
  else{
    return 'it is not a palindrone'
  }
}

// CircularQueue class for implementing a circular queue
class CircularQueue {
  constructor(size) {
    this.size = size;
    this.items = new Array(size);
    this.front = -1;
    this.rear = -1;
  }

  enqueue(element) {
    // Implement enqueue operation for CircularQueue
  }

  dequeue() {
    // Implement dequeue operation for CircularQueue
  }

  peek() {
    // Implement peek operation for CircularQueue
  }

  isEmpty() {
    // Implement isEmpty operation for CircularQueue
  }

  isFull() {
    // Implement isFull operation for CircularQueue
  }
}

// Function to simulate a queue system
function simulateQueue(customers, serviceTime) {
  // Implement simulateQueue function
}

// Exporting the classes and functions for use