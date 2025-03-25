import React from 'react'
import {useState,useEffect, FC} from 'react'


interface RandomConfig {
    min: number;
    max: number;
    delay?: number;
}

const randomNumberPromise=(Range: RandomConfig)=>{
  return new Promise<number>((resolve, reject)=>{
    if (Range.min > Range.max) {
        reject(new Error('Give valid input range'));
    } else {
        setTimeout(()=>{
            resolve(Math.floor(Math.random() * (Range.max - Range.min + 1)) + Range.min);
        },Range.delay)
        
    }
});
};

export const RandomNumber: FC<RandomConfig>=({min, delay, max})=>{
  const [state, setSate]= useState<number>()
  useEffect(()=>{
    randomNumberPromise({min, delay, max}).then(result => {
      setSate(result)
    }).catch(err => {
      console.log(err.message)
    })
  },[state])

  return(
    <div style={{backgroundColor:'white', height:150 , width:150, borderRadius: 75}}>
      <p style={{fontSize:120, textAlign:'center', margin:'none'}}>{state}</p>
    </div>
  )

}

