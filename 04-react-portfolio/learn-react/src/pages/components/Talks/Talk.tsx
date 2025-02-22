import styles from '@/styles/Talks.module.css'
import {FC} from "react";

type TalkProps ={
    title: string;
    talk: {blogImg: string;
        language:string;
        title:string; 
        description:string}[];
    }

export const Talks : FC<TalkProps>=({title, talk}) =>{
    return(
    <section id="4" className={styles.talks}>
        <p>{title}</p>
        <hr />
        <div className={styles.talks__topic}>
        {talk.map(talk=> 
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