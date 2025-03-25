import React from 'react'
import LiveClock from '@/components/timeInterval/clock'
import ProgressBar from '@/components/timeInterval/progressBar'
import AutoSave from '@/components/timeInterval/autoSave'
import Typing from '@/components/timeInterval/typing'
import styles from '@/styles/setIntervalAssignment/assignment.module.css'

const timeIntervalAssignment = () => {
    const handleProgress = ()=>{
        alert("Progress is completed")
    }
    const handleOnSave = (data:any)=>{
        console.log("Auto-saving data:", data);

    }
  return (
    <div className={styles.assignment}>
      <LiveClock/>
      <ProgressBar onComplete={handleProgress} duration={5000} color="blue"/>
      <AutoSave saveInterval={10000} onSave={handleOnSave} data="I want to learn front end"/>
      <Typing/>
    </div>
  )
}

export default timeIntervalAssignment
