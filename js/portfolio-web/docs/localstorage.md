# Local Storage in JavaScript: Persistent Data Storage 💾

Local Storage is a web storage solution that allows JavaScript applications to save key-value pairs in the browser with no expiration time. Think of it as a tiny database that persists even after you close your browser!

## Key Features 🔑

- Stores data as strings (need to JSON.stringify/parse for objects)
- Data persists across browser sessions
- Storage limit of about 5-10 MB
- Data is specific to the domain/origin
- Synchronous API

## Practical Examples 🚀

### Example 1: User Preferences

Save user's theme preference for your website:

````javascript
// Save theme preference
function saveThemePreference(isDark) {
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

// Load theme preference
function loadThemePreference() {
    const theme = localStorage.getItem('theme') || 'light';
    document.body.className = theme;
    return theme;
}

// Usage
saveThemePreference(true);  // User switches to dark theme
console.log(loadThemePreference());  // 'dark'

### Example 2: Shopping Cart
Persist shopping cart items between sessions:

```javascript
// Save cart items
function saveCart(items) {
    localStorage.setItem('cart', JSON.stringify(items));
}

// Load cart items
function loadCart() {
    const cart = localStorage.getItem('cart');
    return cart ? JSON.parse(cart) : [];
}

// Usage
const cart = [
    { id: 1, name: 'Laptop', price: 999 },
    { id: 2, name: 'Mouse', price: 29 }
];
saveCart(cart);
console.log(loadCart());  // Returns array of cart items
````

### Example 3: Form Auto-Save

Auto-save form progress to prevent data loss:

```javascript
// Auto-save form data
function autoSaveForm(formData) {
  localStorage.setItem(
    "formDraft",
    JSON.stringify({
      data: formData,
      timestamp: new Date().toISOString(),
    })
  );
}

// Load saved form data
function loadFormDraft() {
  const saved = localStorage.getItem("formDraft");
  if (!saved) return null;

  const { data, timestamp } = JSON.parse(saved);
  const saveDate = new Date(timestamp);
  console.log(`Form draft from: ${saveDate.toLocaleString()}`);
  return data;
}

// Clear form draft
function clearFormDraft() {
  localStorage.removeItem("formDraft");
}

// Usage
const formData = {
  title: "My Draft Post",
  content: "Work in progress...",
};
autoSaveForm(formData);
console.log(loadFormDraft());
```
