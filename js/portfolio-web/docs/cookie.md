# Cookies in JavaScript: Small but Mighty Data Storage 🍪

Cookies are small pieces of data stored as text strings in the browser. They're commonly used to remember user preferences, tracking information, and session management. Unlike localStorage, cookies can be set to expire and are sent with every HTTP request to the server.

## Key Features 🔑

- Small data storage (usually 4KB limit)
- Can set expiration date
- Sent with every HTTP request
- Accessible from both client and server side
- Domain specific
- Can be secured with flags (HttpOnly, Secure)

## Practical Examples 🚀

### Example 1: User Language Preference

Remember user's language choice:

```javascript
// Set language preference cookie (expires in 30 days)
function setLanguagePreference(lang) {
  const expiryDate = new Date();
  expiryDate.setDate(expiryDate.getDate() + 30);
  document.cookie = `userLang=${lang};expires=${expiryDate.toUTCString()};path=/`;
}

// Get language preference
function getLanguagePreference() {
  const cookies = document.cookie.split(";");
  const langCookie = cookies.find((cookie) => cookie.trim().startsWith("userLang="));
  return langCookie ? langCookie.split("=")[1] : "en";
}

// Usage
setLanguagePreference("es");
console.log(getLanguagePreference()); // 'es'
```

### Example 2: Session Tracking

Track user's visit count:

```javascript
// Increment and store visit count
function trackVisit() {
  let visits = parseInt(getCookie("visitCount")) || 0;
  visits++;

  // Set cookie that expires in 1 year
  const expiryDate = new Date();
  expiryDate.setFullYear(expiryDate.getFullYear() + 1);
  document.cookie = `visitCount=${visits};expires=${expiryDate.toUTCString()};path=/`;

  return visits;
}

// Helper function to get cookie value
function getCookie(name) {
  const cookies = document.cookie.split(";");
  const cookie = cookies.find((c) => c.trim().startsWith(name + "="));
  return cookie ? cookie.split("=")[1] : null;
}

// Usage
console.log(`Visit count: ${trackVisit()}`);
```

### Example 3: Remember Me Login

Implement remember me functionality:

```javascript
// Save login credentials (DO NOT store actual passwords!)
function rememberUser(username, token) {
  const expiryDate = new Date();
  expiryDate.setDate(expiryDate.getDate() + 14); // 14 days

  document.cookie = `rememberedUser=${username};expires=${expiryDate.toUTCString()};path=/`;
  document.cookie = `authToken=${token};expires=${expiryDate.toUTCString()};path=/;secure`;
}

// Check if user is remembered
function getRememberedUser() {
  const username = getCookie("rememberedUser");
  const token = getCookie("authToken");

  if (username && token) {
    return { username, token };
  }
  return null;
}

// Clear remembered user
function forgetUser() {
  document.cookie = "rememberedUser=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
  document.cookie = "authToken=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
}

// Usage
rememberUser("john_doe", "abc123token");
console.log(getRememberedUser());
// forgetUser(); // To clear cookies
```

## Practice Assignments 💪

### 1. Cookie Counter

Create a simple counter that increments every time a user visits the page and stores the count in a cookie. The counter should:

- Initialize to 0 if no cookie exists
- Increment by 1 on each page visit
- Display the current count to the user
- Expire after 7 days

### 2. Theme Switcher

Implement a light/dark theme switcher that:

- Saves user's theme preference in a cookie
- Automatically applies the saved theme on page load
- Toggles between 'light' and 'dark' themes
- Persists the preference for 30 days
