import account , {SignupRequest} from "./services/accounts.mjs"

export function handleSignup(form) {
    //if it fails, then you will show an error message
    //if it succeeds, then you will show the signin form
  let signUp= new SignupRequest(form.name.value, form.email.value, form.password.value)
  let response= account.handleSignupRequest(signUp)
  
  if(response.success){
    const display= document.getElementById('signInform');
    display.style.display= 'block'
    const signupform = document.getElementById('signupform');
    signupform.style.display='none'
  }
  else{
   const userError = document.getElementById('user-error');
   userError.innerText = response.message;
  }
}
/**
 * Write a function to handle Signin request as per the design
*/
export function handleSignIn(form){
  let response= account.handleSignInRequest(form.email.value, form.password.value)
  if(response.success){
  }
  else{
    const error= document.getElementById('error');
    error.innerText= response.message
  }
}


window.handleSignup = handleSignup;
window.handleSignIn= handleSignIn;