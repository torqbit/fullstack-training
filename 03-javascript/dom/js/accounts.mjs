/**
 * Utility class for storing response
 */
export class Response {
  constructor(success, message) {
    this.success = success;
    this.message = message;
  }
}

/**
 * Create a signup request class
 */
export class SignupRequest {
  constructor(name, email, password) {
    // add code here
  }
}

/**
 * Create a UserAccount class
 */
export class UserAccount {}

class AccountService {
  /**
   * Stores a map of user accounts
   * where the key is the email and value is the UserAccount object
   * @param {*} accounts
   */
  constructor(accounts) {
    this.accounts = accounts;
  }

  /**
   * if user with that email already exists then return an object of type
   * Response - new Response(false, 'User already exists with this email')
   * else return  new Response(true, 'You have successfully signed up')
   * @param {*} request of type SignupRequest
   */
  handleSignupRequest(request) {}

  /**
   * Authenticate using email and password.
   * @param {*} email
   * @param {*} password
   */
  handleSigninRequest(email, password) {}
}
//Create an empty Map for storing users
export default new AccountService(new Map());
