import { FC, useEffect, useState } from "react"
import styles from "@/styles/portfolioEditor/AboutForm.module.css"
import { useContext } from "react"
import { AppContext } from "@/components/useContext/appContext"



type ArticleProps = {
  blogImg?: string;
  dateOfPublish?: string;
  category?: string;
  title?: string;
  description?: string;
  articleLink?: string;

}

export const Articleform:FC<{index: number}>=({index})=>{

  const { state, dispatch} = useContext(AppContext);
  const [articleDetails, setArticleDetails] = useState<ArticleProps>()

  useEffect(() => {
    articleDetails && dispatch({ type: "NEW_ARTICLE"});
  }, [articleDetails]);

  

  return (
    <div className={styles.form}>
      <p>Article Section</p>
      <form>
        <div className={styles.information}>
          <label>Blog Img</label>
          <input
            type="text"
            name="blogImg"
            value={state.articles[state.articleIndex].blogImg}
            onChange={(e:any)=> setArticleDetails({...articleDetails , blogImg: e.currentTarget.value })}
            required
          />
        </div>
        <div className={styles.information}>
          <label>Category</label>
          <input
            type="text"
            name="category"
            value={state.articles?.[state.articleIndex]?.category ?? ""}
            onChange={(e:any)=> setArticleDetails({...articleDetails, category:e.currentTarget.value })}
            required
          />
        </div>
        <div className={styles.information}>
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={state.articles?.[state.articleIndex]?.title ?? ""}
            onChange={(e:any)=> setArticleDetails({...articleDetails, title:e.currentTarget.value })}
            required
          />
        </div>
        <div className={styles.information}>
          <label>Description</label>
          <textarea
            name="description"
            value={state.articles?.[state.articleIndex]?.description ?? ""}
            onChange={(e:any)=> setArticleDetails({...articleDetails, description:e.currentTarget.value })}
            required
          />
        </div>
        <div className={styles.information}>
          <label>Date of Publish</label>
          <input
            type="text"
            name="dateofpublish"
            value={state.articles?.[state.articleIndex]?.dateOfPublish ?? ""}
            onChange={(e:any)=> setArticleDetails({...articleDetails, dateOfPublish:e.currentTarget.value })}
            required
          />
        </div>
        <div className={styles.information}>
          <label>Link</label>
          <input
            type="text"
            name="articleLink"
            value={state.articles?.[state.articleIndex]?.articleLink ?? ""}
            onChange={(e:any)=> setArticleDetails({...articleDetails, articleLink:e.currentTarget.value })}
            required
          />
        </div>
      </form>
    </div>
  );
};
