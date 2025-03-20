import { FC, useEffect, useState } from "react"
import styles from "@/styles/portfolioEditor/AboutForm.module.css"
import { useContext } from "react"
import { AppContext } from "@/components/useContext/appContext"
import { ArticleProps } from "./Article"


// const ArticleInitialState:ArticleProps={
//   blogImg: "",
//   dateOfPublish: "",
//   category: "",
//   title: "",
//   description: "",
//   articleLink: ""
// }
export const Articleform:FC=()=>{

  const { state, dispatch} = useContext(AppContext);
  const [articleDetails, setArticleDetails] = useState<ArticleProps>()

  useEffect(() => {
    articleDetails && dispatch({ type: "SAVE_ARTICLE", payload: articleDetails});
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
            value={articleDetails?.blogImg}
            onChange={(e:any)=> setArticleDetails({...articleDetails ,blogImg: e.currentTarget.value })}
            required
          />
        </div>
        <div className={styles.information}>
          <label>Category</label>
          <input
            type="text"
            name="category"
            value={articleDetails?.category}
            onChange={(e:any)=> setArticleDetails({...articleDetails, category:e.currentTarget.value })}
            required
          />
        </div>
        <div className={styles.information}>
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={articleDetails?.dateOfPublish}
            onChange={(e:any)=> setArticleDetails({...articleDetails, title:e.currentTarget.value })}
            required
          />
        </div>
        <div className={styles.information}>
          <label>Description</label>
          <textarea
            name="description"
            value={articleDetails?.description}
            onChange={(e:any)=> setArticleDetails({...articleDetails, description:e.currentTarget.value })}
            required
          />
        </div>
        <div className={styles.information}>
          <label>Date of Publish</label>
          <input
            type="date"
            name="dateofpublish"
            value={articleDetails?.dateOfPublish}
            onChange={(e:any)=> setArticleDetails({...articleDetails, dateOfPublish:e.currentTarget.value })}
            required
          />
        </div>
        <div className={styles.information}>
          <label>Link</label>
          <input
            type="text"
            name="articleLink"
            value={articleDetails?.articleLink}
            onChange={(e:any)=> setArticleDetails({...articleDetails, articleLink:e.currentTarget.value })}
            required
          />
        </div>
      </form>
    </div>
  );
};
