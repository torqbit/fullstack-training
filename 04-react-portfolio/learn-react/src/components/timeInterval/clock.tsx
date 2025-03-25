import React from 'react'
import { useState, useEffect } from 'react';
import styles from '@/styles/setIntervalAssignment/clock.module.css'


interface ClockProps {
    format?: "12h" | "24h";
    showSeconds?: boolean;
}
const LiveClock = () => {
  const [time, setTime] = useState("");
  

  useEffect(() => {
    const interval = setInterval(() => {
        const date = new Date();
        const showTime = date.getHours() 
        + ':' + date.getMinutes() 
        + ":" + date.getSeconds();
    
      setTime(showTime.toLowerCase());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return(
    <div className={styles.clockContainer}>
        <div className={styles.clock}>
              <div className={styles.time}>
                  <p>{time}</p>
             </div>
        </div>
     </div>
    
  
  );
};


export default LiveClock;
