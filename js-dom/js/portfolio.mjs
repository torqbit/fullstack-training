import accountService, { SignupRequest } from "./accounts.mjs";
import UserProfileService from "./profile.mjs";

//Define an array of articles, projects and talks

/**
 * Write a function to handle Signup request as per the design
 */
export function handleSignup(form) {
  console.log(form);
  // handle signup request

  //if it fails, then you will show an error message
  const userError = document.getElementById("user-error");
  userError.innerText = `User already exists`;

  //if it succeeds, then you will show the signin form
}

/**
 * Write a function to handle Signin request as per the design
 */
export function handleSignin(form) {
  console.log(form);

  // if it fails, show the error message

  //if it succeeds, show the portfolio website (navigation and about section)
}

window.handleSignup = handleSignup;
