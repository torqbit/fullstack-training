import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from '../styles/signUp.module.css'
import { About } from "./components/About/About";
import { AppContext } from "./components/AppContext";
import App from "./Main";
import articleList from  './components/Articles/ArticleStore.js'
import { ArticleProps } from "./components/Articles/Article";
import { Articles } from "./components/Articles/Article";
import AppProvider from "@/components/useContext/AppProvider";
import Portfolio from "@/components/useContext/Portfolio";

export type UserProfile = {
    img: string;
    name: string;
    description: string;
    articles: ArticleProps[]
}


const HomePage =()=>{
    const [userProfile, setUserProfile]= useState<UserProfile>({name: '', img:'', description:'', articles: []});
    const [loggedInUser, setLoggedInUser] = useState("")
    
    
    
    
    const getCookie=(name: string)=> {
        const cookies = document.cookie.split(";");
        const cookie = cookies.find((c) => c.trim().startsWith(name + "="));
        return cookie ? cookie.split("=")[1] : null;
      }
      const router= useRouter()
      
    const getRememberedUser =()=> {
        const userEmail = getCookie("email");
        
        if (userEmail) {
            setLoggedInUser(userEmail)
            const userInformation = JSON.parse(localStorage.getItem(`${userEmail}-articles`) || '[]');
            setUserProfile({...userProfile, articles : userInformation} )

            
        }
        else{
            router.push('/signup')
        }
    
      }

    useEffect(() =>{
        getRememberedUser();
    }, []);

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
       <AppProvider>
        <Portfolio/>
       </AppProvider>
    )
};
export default HomePage
