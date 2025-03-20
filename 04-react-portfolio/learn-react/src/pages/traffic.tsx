import {useEffect, useState} from 'react'
type color={
    type:string
}
type colourkey= 'yellow' | 'red' | 'green'

const traffic=()=>{
    const [light, setlight]=useState<colourkey>('yellow')
    useEffect(() =>{
        switch (light) {
            case "yellow":
                setTimeout(()=>{
                    setlight('red');
                },3000)        
                break;
            case "red":
                setTimeout(()=>{
                    setlight('green')
                }, 5000)
                break
            case "green":
                setTimeout(()=>{
                    setlight('yellow')

                },10000)
        
            default:
                break;
        }
    },[light])
    return(
        <div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}