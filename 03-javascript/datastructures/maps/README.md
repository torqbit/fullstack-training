## Maps

A Map is a collection of key-value pairs, where keys can be any data type (objects, primitive values, functions, etc.), and values can be any type of data. Unlike objects, where keys are always strings (or symbols), a Map allows keys of any data type. Maps also remember the insertion order of the keys.

Key Features of Maps:

1. **Key Types**: In a Map, keys can be any data type (not just strings), including objects, functions, and primitives.
2. **Order:** Maps maintain the order of key-value pairs based on insertion order.
3. **Size:** Maps have a size property to easily get the number of entries.
4. **Methods:**
   - set(key, value): Adds a new key-value pair or updates an existing one.
   - get(key): Retrieves the value associated with the specified key.
   - has(key): Returns true if a key exists in the Map.
   - delete(key): Removes the key-value pair with the specified key.

### Example of a Map

```js
let map = new Map();

// Adding elements
map.set("name", "John");
map.set("age", 25);

// Accessing elements
console.log(map.get("name")); // Output: John

// Checking if key exists
console.log(map.has("age")); // Output: true

// Iterating through a Map
map.forEach((value, key) => {
  console.log(key, value);
});
```

## Assignments

Here are five assignments to practice your understanding of Maps, ranging from easy to medium difficulty.

**Assignment 1: Create a Map and Access Values**

- **Task:** Create a Map to store the name of 3 countries and their capitals (e.g., 'USA': 'Washington, D.C.'). Retrieve and log the capital of each country using the get method.
- **Objective:** Understand basic Map creation, set, and get methods.

#### Example of creating a new Map and adding values

```js
let countries = new Map();
countries.set("USA", "Washington, D.C.");
countries.set("Canada", "Ottawa");
countries.set("France", "Paris");

// Retrieve and log the capitals
```

**Assignment 2: Check if a Key Exists**

- **Task:** Using a Map, check if the key 'apple' exists. If it exists, update its value to 'green'. If it doesn’t exist, add the key 'apple' with value 'red'.
- **Objective:** Practice the has() method and update values with the set() method.

**Assignment 3: Map Size**

- **Task:** Create a Map that stores at least 4 key-value pairs. Write a function that returns the size of the Map and logs it.
- **Objective:** Learn how to use the size property of a Map.

**Assignment 4: Iterating Through a Map**

- **Task:** Create a Map of books and their authors. Write a function to log all the keys and values of the Map using forEach.

- **Objective:** Practice iteration with forEach().

**Assignment 5: Remove Items from a Map**

- **Task:** Create a Map that stores a list of products with their prices. Write a function to remove a product by its name and then print the updated Map.
- **Objective:** Learn to remove elements with delete() and print the updated Map.
