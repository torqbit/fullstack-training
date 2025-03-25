import {useState,useEffect, FC} from 'react'
import styles from '@/styles/promise/greeting.module.css'

const myPromise = new Promise<string>((resolve, reject) => {
  // Async operation
  const a = 1;
  if (a == 1) {
    resolve('Success!');
  } else {
    reject(new Error('Failed!'));
  }
});



interface GreetingConfig {
  name: string;
  delay: number;
  language?: "en" | "es" | "fr";
}

const delayedGreeting=(config: GreetingConfig)=>{
  return new Promise<string>((resolve, reject)=>{
    if (config.delay > 0){
      let greeting = "Hello"
      let background= ""
      switch (config.language){
        case 'en':
          greeting = "Hello";
          background='images/usa.jpg'
          break;
        
        case 'es':
          greeting= 'Hola'
          background= 'images/spain.jpg'
          break;

        case 'fr':
          greeting= 'Bonjour'
          background='images/paris.jpg'
          break;
      }
      setTimeout(()=>{
         resolve(`${greeting} ${config.name}:::${background}`)
      },config.delay)

    }
    else{
      reject(new Error('Delay is negative'))
    }

  })
}

export const Greeting: FC<GreetingConfig>=({name, delay, language})=>{
  const [state, setSate]= useState("")
  const [background, setBackground] = useState("");
  useEffect(()=>{
    delayedGreeting({name, delay, language}).then(result => {
      const [greetingText, bgImage] = result.split(":::");
      setSate(greetingText)
      setBackground(bgImage)
    }).catch(err => {
      console.log(err.message)
    })
  },[state])

  return(
    <div className={styles.container}>
      <div style={{backgroundImage: `url(${background})`}} className={styles.background}>
         {state !== "" && (<p>{state}!</p>)}
      </div>
    </div>

    
  )

}



