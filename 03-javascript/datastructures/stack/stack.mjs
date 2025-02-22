// Stack class for basic stack operations
export class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element)
  }

  pop() {
    if (this.items.length != 0){
      return this.items.pop()
     }
     else{
       return 'Stack is empty'
     }
  }

  peek() {
    if (this.items.length != 0){
      return this.items[this.items.length -1]
     }
     else{
       return 'Stack is empty'
     }
  }

  isEmpty() {
    return this.items.length === 0
  }
}
//const stack = new Stack()

// Function to reverse a string using a stack
export function reverseString(input) {
  const stack = new Stack()

  for(let i in input){
    stack.push(input[i])
  }
  const reverse = []
  while (!stack.isEmpty()){
    reverse.push(stack.pop())
  }
  return reverse.join("")
}

// Function to check if parentheses are balanced
export function isBalanced(input) {
  if (input == reverseString(input)){
    return true
  }
  else{
    return false
  }
}
// not able to do this one. still trying

// MinStack class to support retrieving the minimum element
class MinStack extends Stack {
  constructor() {
    super();
    this.minStack = []
  }

  push(element) {
    super.push(element)
    if (this.minStack.length === 0){
      this.minStack.push(element)
    }
    else{
      if (element <= this.minStack[this.minStack.length -1]){
        this.minStack.push(element)
      }
      else{
        this.minStack.push(this.minStack[this.minStack.length -1])
      }
    }
  }

  pop() {
    if (this.length == 0){
      return 'stack and Minstack is empty'
    }
    else{
      super.pop()
      this.minStack.pop()
    }
  }

  getMin() {
    if (this.minStack.length === 0){
      return 'minstack is empty'
    }
    else{
      return this.minStack[this.minStack.length -1]
    }
  }
}

// Function to evaluate a postfix expression
function evaluatePostfix(expression) {
  // Implement evaluatePostfix function
}

// Function to sort a stack using only stack operations
export function sortStack(stack) {
  const obj = new Stack();
  for (let i in stack) {
    obj.push(stack[i]);
  }
  const auxiliaryStack = [];
  while (!obj.isEmpty()) {
    let temp = obj.pop(); 
    while (auxiliaryStack.length > 0 && auxiliaryStack[auxiliaryStack.length - 1] > temp) {
      let moved = auxiliaryStack.pop();
      obj.push(moved);
    }
    auxiliaryStack.push(temp);
  }
  return auxiliaryStack;
}

// Exporting the functions and classes for use
