import React, { useEffect, useState } from "react";
import styles from '@/styles/setTimeAssigment/notification.module.css'
 
 interface NotificationProps {
   message: string;
   duration?: number;
   //onDismiss: () => void;
 }
 
 const Notification: React.FC<NotificationProps> = ({message, duration = 3000}) => {

    
    const [display, setdisplay]= useState(true)

    useEffect(()=>{
        const time = setTimeout(()=>{
            setdisplay(false)}, duration)

        return()=>{
            clearTimeout(time)
        }
    },[])
    const handleDismiss=()=>{
        setdisplay(false)
    }

   return (
     <div className={styles.notification}>
       <div className={styles.notificationContent}>
        {display && (
            <p>{message}</p>
        )}
        <button onClick={handleDismiss}><img src='images/icons8-close.svg'/></button>
       </div>
     </div>
   );
 };
 
 export default Notification;