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
const project1= new Project('webby','about webby','how webby is useful...','nexon.io')
const project2= new Project('netkool','aboutNetkool','how netkool is useful...','nexon.ion')
const talk1= new Talk('javascript-img','javascript','aboutjavascript','how to learn...')
const talk2= new Talk('python-img', 'python','aboutPython','how we can use pyhthon in our....')
/**
 * Write a function to handle Signin request as per the design
*/
export function handleSignIn(form){
  let response= account.handleSignInRequest(form.email.value, form.password.value)
  if(response.success){
    console.log(response.account)
    userprofile.addArticle(response.account,article1)
    userprofile.addArticle(response.account,article2)
    userprofile.addProject(response.account,project1)
    userprofile.addProject(response.account,project2)
    userprofile.addTalk(response.account,talk1)
    userprofile.addTalk(response.account,talk2)

    const articles = userprofile.getArticles(account);
    const projects= userprofile.getProjects(account);
    const talks= userprofile.getTalks(account);
    createArticlesSection(articles)
    createProjectSection(projects)
    createTalkSection(talks)
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
function createProjectSection(projects){
  const projectSection = document.getElementById('project__section');
  const projectHTML = projects.map(a => ` <div class="content">
        <img id="yellow" src= ${a.logo} />
        <div class="project__description">
          <div class="project__name">
            <p>${a.title}</p>
            <a href="/" class="web__link">
              <p>${a.link}</p>
              <i>
                <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 18L18 6" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round"
                    stroke-linejoin="round" />
                  <path d="M8.25 6H18V15.75" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round"
                    stroke-linejoin="round" />
                </svg>
              </i>
            </a>
          </div>
          <p>${a.description}</p>
        </div>
      </div>
     `)
    projectSection.innerHTML += projectHTML.join('')
}
function createTalkSection(talks){
  const talkSection = document.getElementById('talk__section');
  const talksHTML = talks.map(a => ` <div class="language">
        <img src= ${a.blogImg}>
        <p id="white">${a.language}</p>
        <p>${a.title}</p>
        <p>${a.description}</p>
      </div>
     `)
    talkSection.innerHTML += talksHTML.join('')
  
}




window.handleSignup = handleSignup;
window.handleSignIn= handleSignIn;