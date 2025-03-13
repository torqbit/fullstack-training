import styles from '@/styles/Portfolio/Talks.module.css'
import {FC} from "react";

export type TalkProps ={
    blogImg: string;
    language:string;
    title:string; 
    description:string;
}

export const Talks : FC<{talks:TalkProps[]}>=({talks}) =>{
    return(
    <section id="Talks" className={styles.talks}>
        <p>Talks</p>
        <hr />
        <div className={styles.talks__topic}>
        {talks.map(talk=> 
            <TalkCard 
            blogImg={talk.blogImg}
            language={talk.language}
            title={talk.title}
            description={talk.description}
            /> 
        )}
        </div>
    </section>
    )
}
const TalkCard: FC<({blogImg:string, language:string, title:string, description:string})>= ({blogImg, language, title, description})=>(
    <div className={styles.language}>
        <img src={blogImg} />
        <p>{language}</p>
        <p>{title}</p>
        <p>{description}</p>
      </div>
)