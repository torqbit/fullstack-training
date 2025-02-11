import account , {SignupRequest} from "./services/accounts.mjs";
import UserProfileService from "./services/profile.mjs";
import { Article, Project, Talk} from "./entities.mjs";

const userprofile = new UserProfileService()
//Define an array of articles, projects and talks

/**
 * Write a function to handle Signup request as per the design
 */
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
const article1= new Article('img','20thjan','meeting','hsaah','one','readpost')
const article2= new Article('imgBlog','20thfeb','meeting','hsaah','two','blogpost')
/**
 * Write a function to handle Signin request as per the design
*/
export function handleSignIn(form){
  let response= account.handleSignInRequest(form.email.value, form.password.value)
  if(response.success){
    userprofile.addArticle(account,article1)
    userprofile.addArticle(account,article2)
    const articles = userprofile.getArticles(account);
    createArticlesSection(articles)
  }
  else{
    const error= document.getElementById('error');
    error.innerText= response.message
  }

    // if it fails, show the error message

  //if it succeeds, show the portfolio website (navigation and about section)

  // Use UserProfileService get profile, articles, projects and talks
 
  // Add the about section
}
function createArticlesSection(articles) {
  const articleSection = document.getElementById('article__section');
  const articlesHTML = articles.map(a => ` <div class="blog">
        <div class="image">
          <img src=${a.blogImg} />
          <div class="date">
            <p>${a.dateOfPublish}</p>
            <p>${a.category}</p>
          </div>
        </div>
        <p>${a.title}</p>
        <p>
         ${a.description}
        </p>
        </div>
     `)


    articleSection.innerHTML += articlesHTML.join('')

 
}




window.handleSignup = handleSignup;
window.handleSignIn= handleSignIn;