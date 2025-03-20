import styles from '@/styles/Portfolio/Article.module.css'
import {FC} from "react";
import articleList from './ArticleStore';

export type ArticleProps = {
    blogImg: string;
    dateOfPublish: string;
    category: string;
    title: string;
    description: string;
    articleLink: string
}

export const Articles: FC<{articles: ArticleProps[]}> = ({articles}) => {
  
    return(
    <section id="Articles" className={styles.article}>
        <p>Articles</p>
        <hr />
        <div className={styles.grid}>
          {articles.map(article => (
            <ArticleCard
              blogImg={article.blogImg} 
              dateOfPublish={article.dateOfPublish} 
              category={article.category} 
              title={article.title} 
              description={article.description} 
              articleLink={article.articleLink} 
            />
          ))}
        </div>
    </section>
    )
}
    
const ArticleCard: FC<{blogImg: string, dateOfPublish:string, category:string, title:string, description:string, articleLink:string}>=({blogImg, dateOfPublish, category, title, description, articleLink}) => (
    <div className= {styles.blog}>
        <div className={styles.image}>
          <img src={blogImg}/>
          <div className={styles.date}>
            <p>{dateOfPublish}</p>
            <p>{category}</p>
          </div>
        </div>
        <p>{title}</p>
        <p>{description}</p>
        <a href={articleLink} className={styles.article__link}>
          <p>Read post</p>
          <i>
            <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 4.5L16.5 12L9 19.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round" />
            </svg>
          </i>
        </a>
      </div>
)