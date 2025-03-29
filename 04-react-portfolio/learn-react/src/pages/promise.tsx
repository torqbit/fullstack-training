import React from 'react'
import {  Greeting } from '@/components/promises/delayGreeting'
import { RandomNumber } from '@/components/promises/number'
import { BasicFetch } from '@/components/Fetch API/basicDataFetcher'
import NumDisplay from '@/components/promises/numberPrint'

const promise = () => {
  return (
    <div>
      <Greeting name='Aisha' language='fr' delay={5000}/>
      <RandomNumber min={2} max={9} delay={3000}/>
      <BasicFetch/>
      <NumDisplay />
    </div>
  )
}

export default promise
