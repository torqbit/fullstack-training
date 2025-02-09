# Session Storage in Web Browsers

Session Storage is a web storage solution that allows web applications to store key-value pairs in a web browser during a single session. Here are the key points about Session Storage:

## Key Features

- Data persists only for the duration of a browser session
- Data is cleared when the browser tab/window is closed
- Storage limit of ~5-10MB (varies by browser)
- Data is not shared between tabs/windows
- Data is specific to the origin (protocol + domain + port)

## Basic Usage

Here are some examples of using Session Storage:

I'll add practical examples for using Session Storage:

````markdown:/Users/shad/work/pwb/js/portfolio-web/docs/sessionstorage.md
### Setting Items

```javascript
// Store a simple string
sessionStorage.setItem('username', 'john_doe');

// Store an object (must be converted to string)
const userPreferences = {
    theme: 'dark',
    fontSize: 16,
    language: 'en'
};
sessionStorage.setItem('preferences', JSON.stringify(userPreferences));
````

### Getting Items

```javascript
// Get a simple string
const username = sessionStorage.getItem("username");
console.log(username); // 'john_doe'

// Get and parse an object
const preferences = JSON.parse(sessionStorage.getItem("preferences"));
console.log(preferences.theme); // 'dark'
```

### Removing Items

```javascript
// Remove a specific item
sessionStorage.removeItem("username");

// Clear all items in session storage
sessionStorage.clear();
```

## Practical Examples 🚀

### Example 1: Form Data Backup

Save form data in case of accidental page refresh:

```javascript
// Save form data as user types
function saveFormData(formId) {
  const form = document.getElementById(formId);
  const formData = {};

  Array.from(form.elements).forEach((element) => {
    if (element.name) {
      formData[element.name] = element.value;
    }
  });

  sessionStorage.setItem("formBackup", JSON.stringify(formData));
}

// Restore form data
function restoreFormData(formId) {
  const savedData = sessionStorage.getItem("formBackup");
  if (savedData) {
    const formData = JSON.parse(savedData);
    const form = document.getElementById(formId);

    Object.keys(formData).forEach((key) => {
      if (form.elements[key]) {
        form.elements[key].value = formData[key];
      }
    });
  }
}
```

### Example 2: Multi-Step Wizard

Store progress in a multi-step form:

```javascript
const wizardState = {
  currentStep: 1,
  saveStep(data) {
    const currentData = this.getAllData();
    sessionStorage.setItem(
      "wizardData",
      JSON.stringify({
        ...currentData,
        [`step${this.currentStep}`]: data,
      })
    );
  },
  getAllData() {
    return JSON.parse(sessionStorage.getItem("wizardData") || "{}");
  },
  clearData() {
    sessionStorage.removeItem("wizardData");
  },
};
```

### Example 3: Shopping Cart Preview

Temporary shopping cart for browsing session:

```javascript
const sessionCart = {
  addItem(product) {
    const cart = this.getCart();
    cart.push(product);
    sessionStorage.setItem("cart", JSON.stringify(cart));
  },

  removeItem(productId) {
    const cart = this.getCart();
    const updatedCart = cart.filter((item) => item.id !== productId);
    sessionStorage.setItem("cart", JSON.stringify(updatedCart));
  },

  getCart() {
    return JSON.parse(sessionStorage.getItem("cart") || "[]");
  },

  clearCart() {
    sessionStorage.removeItem("cart");
  },
};
```

## Best Practices 🎯

1. Always handle cases where sessionStorage might be unavailable
2. Use try-catch when parsing JSON data
3. Clear sensitive data when no longer needed
4. Don't rely on sessionStorage for critical application state
5. Consider using a prefix for your keys to avoid naming conflicts
