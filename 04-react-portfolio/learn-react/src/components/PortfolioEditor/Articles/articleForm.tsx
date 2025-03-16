import { FC, useEffect, useState } from "react"
import styles from "@/styles/portfolioEditor/AboutForm.module.css"
import { useContext } from "react"
import { AppContext } from "@/components/useContext/appContext"
import { ArticleProps } from "@/components/Portfolio/Articles/Article"



export const Articleform:FC=()=>{

  const { state, dispatch} = useContext(AppContext);
  const [articleDetails, setArticleDetails] = useState<ArticleProps>();

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
            onChange={(e:any)=> setArticleDetails({...aboutDetails, firstname:e.currentTarget.value })}
            required
          />
        </div>
        <div className={styles.information}>
          <label>Last Name</label>
          <input
            type="text"
            name="lastname"
            value={state.about.lastname}
            onChange={(e:any)=> setAboutDetails({...aboutDetails, lastname:e.currentTarget.value })}
            required
          />
        </div>
        <div className={styles.information}>
          <label>Profile Image</label>
          <input
            type="text"
            name="img"
            value={state.about.img}
            onChange={(e:any)=> setAboutDetails({...aboutDetails, img:e.currentTarget.value })}
            required
          />
        </div>
        <div className={styles.information}>
          <label>Description</label>
          <textarea
            name="description"
            value={state.about.description}
            onChange={(e:any)=> setAboutDetails({...aboutDetails, description:e.currentTarget.value })}
            required
          />
        </div>
        <div className={styles.information}>
          <label>Contact Details</label>
          <input
            type="number"
            name="contact"
            value={state.about.contact}
            onChange={(e:any)=> setAboutDetails({...aboutDetails, contact:e.currentTarget.value })}
            required
          />
        </div>
        <div className={styles.information}>
          <label>Contact Type</label>
          <select name="contactType">
            <option value="phone">Phone</option>
            <option value="email">Email</option>
            <option value="whatsapp">WhatsApp</option>
          </select>
        </div>
      </form>
    </div>
  );
};
