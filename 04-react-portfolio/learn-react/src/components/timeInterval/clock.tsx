import React from 'react'
import { useState, useEffect } from 'react';


interface ClockProps {
    format?: "12h" | "24h";
    showSeconds?: boolean;
}
const LiveClock = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const date = new Date();
    const showTime = date.getHours() 
        + ':' + date.getMinutes() 
        + ":" + date.getSeconds();

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(showTime);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return(
  <p>Current Time: {time}</p>
  );
};


export default LiveClock;
