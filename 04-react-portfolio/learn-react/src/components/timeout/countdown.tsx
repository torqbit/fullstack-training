import React, { useEffect, useState } from "react";
import styles from '@/styles/setTimeAssigment/countdown.module.css'
 
 interface CountdownButtonProps {
   onComplete: () => void;
   duration?: number;
   text: string;
 }
 
 const CountdownButton: React.FC<CountdownButtonProps> = ({
   onComplete,
   duration = 5,
   text,
 }) => {
    const [countdown, setcountdown]= useState(duration)
    const[enable, setenable]=useState(false)

    useEffect(()=>{
        if (countdown>0){
           const timing = setTimeout(()=>{
                setcountdown(countdown-1)
            },1000);
        
            return()=>{ clearTimeout(timing)
            }
        }
        else{
            setenable(true);
        }
    },[countdown]);

 
   return (
     <button
       className={styles.countdownButton}
       disabled={!enable}
       onClick={onComplete}>
       {!enable ? `Wait ${countdown}`: text}
     </button>
   );
 };
 
 export default CountdownButton;