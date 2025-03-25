import React from 'react'
import { useState, useEffect } from 'react'
import styles from '@/styles/setIntervalAssignment/typing.module.css'

interface TypingIndicatorProps {
    username?: string;
  }

const Typing:React.FC<TypingIndicatorProps>=(username) => {
    const[state, setState]= useState<string>("")
    const[typing, setTyping]=useState(false)
    useEffect(()=>{
        if (state.length != 0){
            setTyping(true)
        }
        const timeout = setInterval(() => {
            setTyping(false);
          }, 1000);
      
          return () => clearInterval(timeout)
    },[state])

  return (
    <div className={styles.chat__container}>
        {typing && (
        <div className={styles.typing}>
          <label>Typing</label>
          <span></span>
          <span></span>
          <span></span>
        </div>
        )}
       
        <input
            className={styles.input}
            type="text"
            name="username"
            placeholder='type a message...'
            value={state}
            onChange={(e:any)=> setState(e.target.value)}
            required
          />
    </div>
  )
}

export default Typing
