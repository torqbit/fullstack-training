import React from 'react'
import LiveClock from '@/components/timeInterval/clock'
import ProgressBar from '@/components/timeInterval/progressBar'

const timeIntervalAssignment = () => {
    const handleProgress = ()=>{
        alert("Progress is completed")
    }
  return (
    <div>
      <LiveClock/>
      <ProgressBar onComplete={handleProgress} duration={5000} color="green" />
    
    </div>
  )
}

export default timeIntervalAssignment
