import styles from '@/styles/About.module.css'
import {FC} from "react";

type AboutProps ={
  img: string;
  name: string;
  introduction: string;
}
export const About: FC<AboutProps> = ({img, name, introduction}) =>{
    return(
    <section id="1" className={styles.about}>
    <div className={styles.about__container}>
      <div className={styles.img__container}>
        <img src={img} />
      </div>
      <p>Hey,I'm {name}</p>
      <h1>
        {introduction}
      </h1>
    </div>
    </section>
    )
}

