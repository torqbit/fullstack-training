import React from 'react'
import {useState, useEffect, FC} from 'react'

interface ProgressBarProps {
    duration: number; // milliseconds
    onComplete: () => void;
    color?: string;
  }

  const ProgressBar:FC<ProgressBarProps>=({onComplete, color = "blue", duration = 5000})=> {
    const [progress, setProgress] = useState(0);
    const step = 100/(duration/50);
  
    useEffect(() => {
      const progressInterval = setInterval(() => {
        setProgress(progress+step);
      }, 50);
  
      if (progress == 100) {
        onComplete();
      }
  
      return () => clearInterval(progressInterval);
    }, [progress]);
  
    return (
      <div style={{ width: "300px", border: "1px solid black", padding: "5px" }}>
        <div
          style={{
            width: `${progress}%`,
            backgroundColor: color,
            transition: "width 0.1s ease-in-out",
          }}
        ></div>
        <p>{progress}%</p>
      </div>
    );
  }

export default ProgressBar
