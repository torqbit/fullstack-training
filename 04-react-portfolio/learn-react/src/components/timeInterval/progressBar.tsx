import React from 'react'
import {useState, useEffect, FC} from 'react'
import styles from '@/styles/setIntervalAssignment/progressBar.module.css'

interface ProgressBarProps {
    duration: number; // milliseconds
    onComplete: () => void;
    color?: string;
  }

  const ProgressBar:FC<ProgressBarProps>=({onComplete, color = "#0000FF", duration = 5000})=> {
    const [progress, setProgress] = useState(0);
    const step = 100/(duration/50);
  
    useEffect(() => {
      const progressInterval = setInterval(() => {
        setProgress(progress+step);
      }, 500);
  
      if (progress == 100) {
        clearInterval(progressInterval);
        onComplete();
      }
      return () => clearInterval(progressInterval);
    }, [progress]);
  
    return (
      <div className={styles.container}>
        <h2>Daily Progress</h2>
        <div className={styles.progress}>
          <label>Project Task 1</label>
          <div className={styles.progressBar} style={{width: `${progress}%`,backgroundColor: color,height:20}}></div>
          <p>{progress}% completed</p>
        </div>
      </div>
    );
  }

export default ProgressBar
