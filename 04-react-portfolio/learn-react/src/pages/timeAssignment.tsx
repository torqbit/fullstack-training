import React from 'react'
import styles from '@/styles/setTimeAssigment/assignment.module.css'
import Notification from '@/components/timeout/notification'
import SearchInput from '@/components/timeout/searchInput'
import CountdownButton from '@/components/timeout/countdown'
import QuizQuestion from '@/components/timeout/quiz'

const timeAssignment = () => {
  const handleCountdown=()=>{
    alert("Countdown completed! Button clicked.")
  }

  return (
    <div className={styles.assignment}>
      {<Notification message='My first Assignment is finished'/>}
      <SearchInput onSearch={(query: string)=>{console.log(query)}}/>
      <CountdownButton text='click  Me' onComplete={handleCountdown}/>
      <QuizQuestion question='First Prime Minister of India' options={['JawaharLal Nehru', 'Indira Gandhi', 'Lal bhadur']} timeLimit={10}/>
    </div>
  )
}

export default timeAssignment

