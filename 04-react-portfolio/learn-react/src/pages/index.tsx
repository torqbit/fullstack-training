import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from '../styles/signUp.module.css'
import { About } from "./components/About/About";

type UserProfile= {
    name : string;
    title : string;
    description: string;
}
const getUserProfile=(email: string)=>{
    const user: UserProfile= {name:'aisha', title:'fullstack-dev', description:'learning frontend' }
    return user
}



const HomePage =()=>{
    const [userProfile, setUserProfile]= useState<UserProfile>();
    const getCookie=(name: string)=> {
        const cookies = document.cookie.split(";");
        const cookie = cookies.find((c) => c.trim().startsWith(name + "="));
        return cookie ? cookie.split("=")[1] : null;
      }
      const router= useRouter()
      
    const getRememberedUser =()=> {
        const userEmail = getCookie("email");
        
        if (userEmail) {
            setUserProfile({...userProfile, ...getUserProfile(userEmail)})
            return userEmail;
        }
        else{
            return null
        }

      }

    useEffect(() =>{
        const user =  getRememberedUser();
        console.log(user)
        if (!user){
            router.push('/signup')
        }
        
    }, []);

    return(
        <div>
            {userProfile && 
            <About img={userProfile.title} introduction={userProfile.description} name={userProfile.name}/>}
        </div>
        )
};
export default HomePage

