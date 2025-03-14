import styles from '@/styles/Portfolio/About.module.css'
import { useRouter } from 'next/router';
import {FC, useContext, useState} from "react";

export type AboutProps = {
  img: string | null;
  name: string | null;
  description: string | null;
}


export const About: FC<AboutProps> = ({name, description, img}) =>{
  const[abouthighlight, setabout] = useState(false)
  const router = useRouter()


  

 

    return(
    <section id="About" className={styles.about} onMouseOver={(e:any) => setabout(true)}  onMouseLeave={(e:any)=> setabout(false)}>
    <div className={styles.about__container}>
        <div className={styles.img__container}>
          {img != null &&(
          <img src={img} /> )}
        </div>
        {abouthighlight &&(
        <button onClick={(e:any)=>router.push('edit')}>Edit</button>)}
      <p>Hey,I'm {name}</p>
      <h1>
        {description}
      </h1>
    </div>
    </section>
  )
}

