
import React from 'react'
import {useState, useEffect, FC} from 'react'


const numArray = [1,2,3,4]
numArray.reduce((prev, curr) => prev + curr,0)
const numberPrint = (num: number) => {
  return new Promise<number>((resolve, reject)=>{
    setTimeout(() =>{
        console.log(num);
        resolve(num)
    },1000 * num)
  })
}

const NumDisplay: FC = () => {

    const resolvePromises = async () => {
        const allPromises = numArray.map(n => numberPrint(n))
        const onePromise = Promise.all(allPromises)
        const arrayValues = await onePromise;
        return arrayValues;
    }

    const numberPrint = (num: number) => {
        return new Promise<number>((resolve, reject)=>{
          resolve(num)
        })
      }
      

    const returnPromiseFunc = async (num: number) => {
        // read from db

        // process record
        return num;
    }

    useEffect(() => {
        resolvePromises().then(arrayNums => {
            console.log(arrayNums)
        })

        returnPromiseFunc(100).then(r => {

        }).catch(err => {

        })

        const result = await returnPromiseFunc(100);

        

    },[])

    return (<div>

    </div>)
}

export default NumDisplay;
