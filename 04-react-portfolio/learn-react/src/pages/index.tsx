import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from '../styles/signUp.module.css'

type UserProfile= {
    name : string;
    title : string;
    description: string;
}
const getUserProfile=(email: string)=>{
    const user= {email:{name:'aisha', title:'fullstack-dev', description:'learning frontend' }}
    return user
}

const router= useRouter()

const HomePage =()=>{
    const [userProfile, setUserProfile]= useState<UserProfile>();
    const getCookie=(name: string)=> {
        const cookies = document.cookie.split(";");
        const cookie = cookies.find((c) => c.trim().startsWith(name + "="));
        return cookie ? cookie.split("=")[1] : null;
      }
      
    const getRememberedUser =()=> {
        const username = getCookie("saveUserCookie");
      
        if (username) {
            setUserProfile({...userProfile, getUserProfile })
          
        }
        return null;
      }

    useEffect(() =>{
        const user =  getRememberedUser()
        if (!user){
            router.push('/signUp')
        }
    }, []);
    return(
        <div>
            <About img={"/images/uifaces-popular-image.jpg"} introduction="I am a FullStack-Developer" name= "Aisha" />
        </div>
    } 

};