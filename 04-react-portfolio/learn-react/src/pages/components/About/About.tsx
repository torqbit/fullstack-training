import styles from '@/styles/About.module.css'
import {FC, useContext} from "react";

export type AboutProps = {
  img: string | null;
  name: string | null;
  description: string | null;
}


export const About: FC<AboutProps> = ({name, description, img}) =>{
  

 

    return(
    <section id="1" className={styles.about}>
    <div className={styles.about__container}>
      <div className={styles.img__container}>
      {img != null &&(
        <img src={img} /> )}
      </div>
      <p>Hey,I'm {name}</p>
      <h1>
        {description}
      </h1>
    </div>
    </section>
    )
}

