import styles from '@/styles/portfolioEditor/About.module.css'
import { useRouter } from 'next/router';
import {FC, useContext, useState} from "react";

export type AboutProps = {
  img: string | null;
  name: string | null;
  description: string | null;
}


export const About: FC<AboutProps> = ({name, description, img}) =>{
  return(
    <section id="About" className={styles.about} >
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

