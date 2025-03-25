import React from 'react'
import {  Greeting } from '@/components/promises/delayGreeting'
import { RandomNumber } from '@/components/promises/number'
import { BasicFetch } from '@/components/Fetch API/basicDataFetcher'

const promise = () => {
  return (
    <div>
      <Greeting name='Aisha' language='es' delay={5000}/>
      <RandomNumber min={2} max={9} delay={3000}/>
      <BasicFetch/>
    </div>
  )
}

export default promise
