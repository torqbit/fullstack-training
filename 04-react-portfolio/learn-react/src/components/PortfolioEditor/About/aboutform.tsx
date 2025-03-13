import { FC, useEffect, useState } from "react"
import styles from "@/styles/portfolioEditor/AboutForm.module.css"
import { useContext } from "react"
import { AppContext } from "@/components/useContext/appContext"
import { initialState } from "./formstate"


export type AboutProps = {
    firstname:string,
    lastname:string ,
    contact: number,
    img: string,
    name: string,
    description : string 
}
export const Aboutform:FC<AboutProps>=({firstname,lastname,contact,img,name,description})=>{

  const { state, dispatch} = useContext(AppContext);
  const [aboutDetails, setAboutDetails] = useState<AboutProps>(state);

  useEffect(() => {
    dispatch({ type: "INPUT_CHANGE", payload: aboutDetails});
  }, [aboutDetails]);

  

  return (
    <div className={styles.form}>
      <p>About Section</p>
      <form>
        <div className={styles.information}>
          <label>First Name</label>
          <input
            type="text"
            name="firstname"
            value={state.firstname}
            onChange={(e:any)=> setAboutDetails({...aboutDetails, firstname:e.currentTarget.value })}
            required
          />
        </div>
        <div className={styles.information}>
          <label>Last Name</label>
          <input
            type="text"
            name="lastname"
            value={state.lastname}
            onChange={(e:any)=> setAboutDetails({...aboutDetails, lastname:e.currentTarget.value })}
            required
          />
        </div>
        <div className={styles.information}>
          <label>Profile Image</label>
          <input
            type="text"
            name="img"
            value={state.img}
            onChange={(e:any)=> setAboutDetails({...aboutDetails, img:e.currentTarget.value })}
            required
          />
        </div>
        <div className={styles.information}>
          <label>Description</label>
          <textarea
            name="description"
            value={state.description}
            onChange={(e:any)=> setAboutDetails({...aboutDetails, description:e.currentTarget.value })}
            required
          />
        </div>
        <div className={styles.information}>
          <label>Contact Details</label>
          <input
            type="number"
            name="contact"
            value={state.contact}
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
