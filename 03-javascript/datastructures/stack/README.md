# Stack Data Structure in JavaScript: The Last-In-First-Out Party! 🎉

Ever been to one of those fancy plate stacking restaurants where the last plate put on top is always the first one to be used? Well, congratulations! You've just witnessed a stack in action (minus the food, unfortunately).

A stack is a linear data structure that follows the Last-In-First-Out (LIFO) principle. Think of it like a stack of pancakes - you can only eat from the top, unless you want to cause a breakfast disaster!

## Example : The Browser History Time Machine 🕰️

Let's see how a browser's history mechanism works using a stack:

When you browse the internet, every time you visit a new webpage, it gets pushed onto a stack. Think about what happens when you click through Wikipedia articles:

1. You start on the "Dogs" page (pushed to stack)
2. Click a link to "Wolves" (pushed to stack)
3. Click another to "Canidae Family" (pushed to stack)

When you hit the back button:

1. "Canidae Family" gets popped off (removed from top)
2. You return to "Wolves"
3. Hit back again, "Wolves" gets popped off
4. You're back to "Dogs"

This is a perfect example of LIFO in action:

- Push: When you visit a new page
- Pop: When you click the back button
- Peek: Your current page (top of the stack)

Try this yourself! Open your browser and watch how the back/forward buttons manage your browsing history just like a stack.

Here are five assignments designed to test the understanding of stacks in JavaScript. Each assignment is crafted to be of easy to medium complexity level:

### Assignment 1: Reverse a String

**Objective:** Use a stack to reverse a given string.

**Instructions:**

- Create a function `reverseString(input)` that takes a string as input.
- Use a stack to reverse the characters of the string.
- Return the reversed string.

### Assignment 2: Balanced Parentheses

**Objective:** Check if a string of parentheses is balanced using a stack.

**Instructions:**

- Create a function `isBalanced(input)` that takes a string containing only `(` and `)` as input.
- Use a stack to determine if the parentheses are balanced.
- Return `true` if balanced, otherwise `false`.

### Assignment 3: Implement a Min Stack

**Objective:** Extend the stack to support retrieving the minimum element in constant time.

**Instructions:**

- Create a class `MinStack` that extends the basic stack.
- Implement methods `push`, `pop`, `peek`, and `getMin`.
- `getMin` should return the minimum element in the stack in constant time.

### Assignment 4: Evaluate Postfix Expression

**Objective:** Evaluate a postfix expression using a stack.
A postfix expression, also known as Reverse Polish Notation (RPN), is a mathematical notation in which operators follow their operands. This eliminates the need for parentheses to define the order of operations. In postfix notation, the expression is evaluated from left to right, and operators are applied to the most recent operands.

### Example of Postfix Expression

Consider the infix expression: `3 + 4 * 2`

In postfix notation, this expression would be written as: `3 4 2 * +`

### How Postfix Works

1. **Operands are pushed onto a stack**: As you read the expression from left to right, you push operands (numbers) onto a stack.
2. **Operators are applied**: When you encounter an operator, you pop the required number of operands from the stack, apply the operator, and push the result back onto the stack.
3. **Final result**: After processing the entire expression, the final result will be the only value left on the stack.

### Evaluating the Example

For the postfix expression `3 4 2 * +`:

1. Push `3` onto the stack.
2. Push `4` onto the stack.
3. Push `2` onto the stack.
4. Encounter `*`, pop `2` and `4`, compute `4 * 2 = 8`, push `8` onto the stack.
5. Encounter `+`, pop `8` and `3`, compute `3 + 8 = 11`, push `11` onto the stack.

The final result is `11`, which is the value left on the stack.

#### Advantages of Postfix Notation

- **No need for parentheses**: The order of operations is clear without needing parentheses.
- **Efficient computation**: It is straightforward to evaluate using a stack, making it suitable for computer algorithms.

Postfix expressions are commonly used in stack-based and compiler design applications due to their simplicity in evaluation.
**Instructions:**

- Create a function `evaluatePostfix(expression)` that takes a string representing a postfix expression.
- Use a stack to evaluate the expression.
- Return the result of the evaluation.

### Assignment 5: Sort a Stack

**Objective:** Sort a stack using only stack operations.

**Hint:**

To sort a stack using only stack operations, we can use an auxiliary stack to help with the sorting process. The idea is to repeatedly pop elements from the original stack and insert them into the auxiliary stack in sorted order. Here's how you can implement this:

**Instructions:**

- Create a function `sortStack(stack)` that takes a stack as input.
- Sort the stack using only `push`, `pop`, `peek`, and `isEmpty` operations.
- Return the sorted stack.

These assignments cover various aspects of stack operations and applications, helping to reinforce the understanding of stack data structures in JavaScript.
