## Portfolio Builder - Javascript DOM

### Accounts Service

`AccountService` will be responsible for storing all user accounts, creating new accounts and authenticating the existing users.

**1. Create a Signup Request class**

Create a `SignupRequest` class in the `accounts.mjs` for creating object when user signs up using the html form.

**2. Create a UserAccount class**

Define a class `UserAccount` with attributes -- email, name and password.

**3. Create a method handleSignupRequest**

Use this method to store new accounts, if it doesn't exist. You need to use the `Map` datastructure for storing and finding the user accounts.

if user with that email already exists then return an object of type
Response - `new Response(false, 'User already exists with this email')`
else return `new Response(true, 'You have successfully signed up')`

**4. Create a method handleSignup**

In the `handleSignup` function in `portfolio.mjs` you need to create the object of type `SignupRequest` with attribute values extracted from the `form` elements and call the `handleSignupRequest` method of `AccountService` object that is already imported in the `portfolio.mjs` file.
