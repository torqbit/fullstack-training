import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from '../styles/signUp.module.css'
import { About } from "../components/Portfolio/About/About";
import { AppContext } from "./components/AppContext";
import App from "./Main";
import { ArticleProps } from "../components/Portfolio/Articles/Article";
import { Articles } from "../components/Portfolio/Articles/Article";
import AppProvider from "@/components/useContext/AppProvider";
import Portfolio from "@/components/useContext/Portfolio";
import { Nav } from "@/components/Portfolio/Nav/Nav";
import articleList from "@/components/Portfolio/Articles/ArticleStore";
import { Projects } from "@/components/Portfolio/Projects/Project";
import projectList from "@/components/Portfolio/Projects/ProjectStore";
import { Talks } from "@/components/Portfolio/Talks/Talk";
import talkList from "@/components/Portfolio/Talks/TalkStore";

export type UserProfile = {
    img: string;
    name: string;
    description: string;
    articles: ArticleProps[]
}


const HomePage =()=>{
    // //const [userProfile, setUserProfile]= useState<UserProfile>({name: '', img:'', description:'', articles: []});
    // const [loggedInUser, setLoggedInUser] = useState("")
    
    
    
    
    // const getCookie=(name: string)=> {
    //     const cookies = document.cookie.split(";");
    //     const cookie = cookies.find((c) => c.trim().startsWith(name + "="));
    //     return cookie ? cookie.split("=")[1] : null;
    //   }
    //   const router= useRouter()
      
    // const getRememberedUser =()=> {
    //     const userEmail = getCookie("email");
        
    //     if (userEmail) {
    //         setLoggedInUser(userEmail)
    //         const userInformation = JSON.parse(localStorage.getItem(`${userEmail}-articles`) || '[]');
    //         //setUserProfile({...userProfile, articles : userInformation} )

            
    //     }
    //     else{
    //         router.push('/signup')
    //     }
    
    //   }

    // useEffect(() =>{
    //     getRememberedUser();
    // }, []);

    // useEffect(() => {
    //     if (loggedInUser) {
    //         const userInformation = JSON.parse(localStorage.getItem(`${loggedInUser}-articles`) || '[]');
    //         setUserProfile({...userProfile,
    //             articles: userInformation || [],
    //         });
    //     }
    //     else{
    //         router.push('/signup')
    //     }
    // }, [loggedInUser])


    return(
    <>
      <Nav firstName="BELLA" lastName="DOE" links={['About', 'Articles', 'Projects', 'Talks']} btnlogo="/images/phone.svg" content="Let's Talk" />
      <About  img='/images/uifaces-popular-image.jpg' name= 'Bella' description='I help Startsups through fast-paced full stack software development'/>
      <Articles articles={articleList.getArticles()} />
      <Projects projects={projectList.getProjects()}/>
      <Talks talks={talkList.getTalks()}/>
    </>
     
    )
};
export default HomePage
