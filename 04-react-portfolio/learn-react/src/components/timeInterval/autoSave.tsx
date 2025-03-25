import React from 'react'
import { useEffect, useState } from 'react'
import styles from '@/styles/setIntervalAssignment/autoSave.module.css'

interface AutoSaveProps {
    data: any;
    saveInterval?: number; // milliseconds
    onSave: (data: any) => void;
  }

const AutoSave:React.FC<AutoSaveProps> = ({data, saveInterval, onSave})=> {
        
    const [time, setTime]= useState("")
    useEffect(() =>{
        const date = new Date();
        const showTime = date.getHours() 
        + ':' + date.getMinutes() 
        + ":" + date.getSeconds();
        const interval = setInterval(()=>{
            onSave(data)
            setTime(showTime)
        }, saveInterval)
        return () => clearInterval(interval);
    },[data])
  return (
    <div className={styles.container}>
      <p>Last Modified</p>
      <p>{time}</p>
    </div>
  )
}

export default AutoSave
