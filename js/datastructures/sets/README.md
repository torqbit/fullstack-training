# Sets in JavaScript: The Exclusive Club 🎩

Welcome to the world of Sets in JavaScript, where duplicates are strictly forbidden, and every element is a VIP! Imagine a club where each member is unique, and once you're in, you can't bring a twin. Let's dive into the exclusive world of Sets!

## The Set Club Rules 🏛️

1. **No Duplicates Allowed**: Just like a club that only allows one of each type of guest, Sets ensure that each element is unique. Try adding a duplicate, and the Set will politely ignore it.
2. **Unordered**: In the Set club, there's no seating arrangement. Members can mingle freely, and their order doesn't matter.
3. **Membership Check**: Want to know if someone is in the club? Sets make it easy to check if an element is a member.

## Practical Examples with a Twist 🎭

### Example 1: The Guest List

Imagine you're organizing a party, and you want to ensure no one gets two invitations. A Set is perfect for managing your guest list!

```javascript
const guestList = new Set();

// Adding guests
guestList.add("Alice");
guestList.add("Bob");
guestList.add("Charlie");
guestList.add("Alice"); // Duplicate! Alice already has an invite

console.log(guestList); // Output: Set { 'Alice', 'Bob', 'Charlie' }
```

### Example 2: The Lost and Found

At the end of the party, you have a pile of lost items. You want to make sure you don't return the same item twice.

```javascript
const lostAndFound = new Set(["hat", "scarf", "gloves", "hat"]);

// Checking for an item
if (lostAndFound.has("scarf")) {
  console.log("Scarf found! Returning to owner.");
}

// Removing an item
lostAndFound.delete("gloves");

console.log(lostAndFound); // Output: Set { 'hat', 'scarf' }
```

### Example 3: The Unique Talent Show

You're hosting a talent show, and each act must be unique. Use a Set to ensure no two acts are the same!

```javascript
const talentShowActs = new Set(["juggling", "magic", "singing", "juggling"]);

console.log(talentShowActs); // Output: Set { 'juggling', 'magic', 'singing' }
```

## Conclusion: The Set Club's Motto 🎉

In the world of Sets, uniqueness is celebrated, and duplicates are shown the door. Whether you're managing a guest list, a lost and found, or a talent show, Sets ensure that every element is one-of-a-kind. So, join the Set club and embrace the power of exclusivity!

Here are five assignments designed to practice Sets in JavaScript

### Assignment 1: Unique Elements from an Array

**Objective:** Extract unique elements from an array using a Set.

**Instructions:**

- Create a function `uniqueElements(arr)` that takes an array as input.
- Use a Set to filter out duplicate elements.
- Return an array of unique elements.

### Assignment 2: Set Operations - Union

**Objective:** Perform a union operation on two sets.

- Create a function `union(setA, setB)` that takes two sets as input.
- Return a new set that contains all elements from both sets.

### Assignment 3: Set Operations - Intersection

**Objective:** Perform an intersection operation on two sets.

**Instructions:**

- Create a function `intersection(setA, setB)` that takes two sets as input.
- Return a new set that contains only the elements present in both sets.

### Assignment 4: Set Operations - Difference

**Objective:** Perform a difference operation on two sets.

**Instructions:**

- Create a function `difference(setA, setB)` that takes two sets as input.
- Return a new set that contains elements present in `setA` but not in `setB`.

### Assignment 5: Check Subset

**Objective:** Check if one set is a subset of another.

**Instructions:**

- Create a function `isSubset(setA, setB)` that takes two sets as input.
- Return `true` if `setA` is a subset of `setB`, otherwise return `false`.

These assignments cover various operations and applications of Sets in JavaScript, helping to reinforce the understanding of this data structure.
