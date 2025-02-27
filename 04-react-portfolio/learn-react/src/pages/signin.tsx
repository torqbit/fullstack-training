import {useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from '../styles/signIn.module.css'
import accountsService, { Response, UserAccount } from "@/pages/services/Account"

type FormState = {
  email: string;
  password: string;
  response?: Response;
};

const Signin= () => {
  const [btnActive, setbtnActive] = useState(false)
  const router = useRouter(); 
  const [signinForm, setSignInForm] = useState<FormState>({
    email: "",
    password: ""
  });
  useEffect(() => {
    if (signinForm.email !== "" && signinForm.password !== ""){
        setbtnActive(true)
    }
    if (signinForm.email === "" &&  signinForm.password === ""){
        setbtnActive(false)
    }
  },[signinForm])

  const handleSignin = () => {
    const user = new UserAccount(
      signinForm.email,
      signinForm.password
    );
    const signinResponse = accountsService.handleSignInRequest(signinForm.email, signinForm.password);
    setSignInForm({ ...signinForm, response: signinResponse });
    if (signinResponse.success) {
      accountsService.saveUserCookie(user)
    }
  };

  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <img src='./torqbit.png'></img>
        <h5>Welcome back to Torqbit</h5>
        {signinForm.response && signinForm.response.success && (
          <p>{signinForm.response.message}</p>
        )}

        {signinForm.response && !signinForm.response.success && (
          <p style={{ color: "red" }}>{signinForm.response.message}</p>
        )}
        <form onSubmit={Signin}>
            <input type="email" name="email" placeholder="Email" onChange={(e:any)=>setSignInForm({...signinForm,email: e.currentTarget.value})} required />
            <input type="password" name="password" placeholder="Password" onChange={(e:any)=>setSignInForm({...signinForm, password:e.currentTarget.value})} required />
            <button disabled ={!btnActive} className={`${btnActive ? 
            styles.btn__active : styles.btn__inactive}`} type="submit" onClick={(e: any) => handleSignin()}>
              Login with Email
              </button>
        </form>
      </div>
    </div>
  );
}
