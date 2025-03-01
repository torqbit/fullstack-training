

/**
 * Utility class for storing response
 */
export class Response {
  success: boolean;
  message: string;
  account?: UserAccount;

  constructor(success: boolean, message: string, account?: UserAccount) {
    this.success = success;
    this.message = message;
    this.account = account;
  }
}

/**
 * Create a signup request class
 */
export class SignupRequest {
  name: string;
  email: string;
  password: string;

  constructor(name: string, email: string, password: string) {
    this.name = name;
    this.email = email;
    this.password = password;
  }
}

/**
 * Create a UserAccount class
 */
export class UserAccount {
  email: string;
  password: string;

  constructor(email: string, password: string) {
    this.email = email;
    this.password = password;
  }
}

class AccountService {
  accounts: Map<string, UserAccount>;

  /**
   * Stores a map of user accounts
   * where the key is the email and value is the UserAccount object
   * @param {*} accounts
   */
  constructor(accounts: Map<string, UserAccount>) {
    this.accounts = accounts;
  }

  /**
   * if user with that email already exists then return an object of type
   * Response - new Response(false, 'User already exists with this email')
   * else return  new Response(true, 'You have successfully signed up')
   * @param {*} request of type SignupRequest
   */
  handleSignupRequest(request: SignupRequest) {
    if (this.accounts.has(request.email)) {
      return new Response(false, "User already exists with this email");
    } else {
      this.accounts.set(
        request.email,
        new UserAccount(request.email, request.password)
      );
      return new Response(true, "You have successfully signed up");
    }
  }

  saveUserCookie(account: UserAccount) {
    const expiryDate = new Date();
    expiryDate.setDate(expiryDate.getDate() + 14); // 14 days
    document.cookie = `email=${
      account.email
    };expires=${expiryDate.toUTCString()};path=/`;
  }

  /**
   * Authenticate using email and password
   * @param {*} email
   * @param {*} password
   * @returns
   */ 
  handleSignInRequest(email: string, password: string) {
    if (
      this.accounts.has(email) &&
      this.accounts.get(email)?.password == password
    ) {
      return new Response(true, "authenticated", this.accounts.get(email));
    } else {
      return new Response(false, "invalid email or password");
    }
  }
}

//Create an empty Map for storing users
const accountsService = new AccountService(new Map());
export default accountsService;

