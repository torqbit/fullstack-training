import React from 'react'
import { FocusManagement } from '@/components/useRef/focus'
import { Stopwatch } from '@/components/useRef/stopwatch'


const useRef = () => {
  return (
    <div style={{backgroundColor:'white'}}>
      <FocusManagement/>
      <Stopwatch/>
    </div>
  )
}

export default useRef
