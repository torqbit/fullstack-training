import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "../styles/signUp.module.css";
import accountsService, {
  Response,
  SignupRequest,
} from "@/pages/services/Account";

type FormState = {
  name: string;
  email: string;
  password: string;
  response?: Response;
};

const Signup = () => {
  const [btnActive, setbtnActive] = useState(false);
  const router = useRouter();
  const [signupForm, setSignUpForm] = useState<FormState>({
    name: "",
    email: "",
    password: "",
  });
  useEffect(() => {
    if (
      signupForm.email !== "" &&
      signupForm.name !== "" &&
      signupForm.password !== ""
    ) {
      setbtnActive(true);
    }
    if (
      signupForm.email === "" &&
      signupForm.name === "" &&
      signupForm.password === ""
    ) {
      setbtnActive(false);
    }
  }, [signupForm]);

  const handleSignup = () => {
    console.log("handle sign up");
    const signupRequest = new SignupRequest(
      signupForm.name,
      signupForm.email,
      signupForm.password
    );
    const signupResponse = accountsService.handleSignupRequest(signupRequest);
    setSignUpForm({ ...signupForm, response: signupResponse });
    if (signupResponse.success) {
      console.log(signupResponse);
      router.push(`/signin`);
    }
  };

  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <img src="./torqbit.png"></img>
        <h5>Welcome to Torqbit</h5>
        {signupForm.response && signupForm.response.success && (
          <p>{signupForm.response.message}</p>
        )}

        {signupForm.response && !signupForm.response.success && (
          <p style={{ color: "red" }}>{signupForm.response.message}</p>
        )}
        <form onSubmit={Signup}>
          <input
            type="text"
            name="name"
            placeholder="Enter your Name"
            value={signupForm.name}
            onChange={(e: any) =>
              setSignUpForm({ ...signupForm, name: e.currentTarget.value })
            }
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your Email"
            value={signupForm.email}
            onChange={(e: any) =>
              setSignUpForm({ ...signupForm, email: e.currentTarget.value })
            }
            required
          />
          <input
            type="password"
            name="password"
            placeholder="*******"
            value={signupForm.password}
            onChange={(e: any) =>
              setSignUpForm({ ...signupForm, password: e.currentTarget.value })
            }
            required
          />
          <button
            disabled={!btnActive}
            className={`${
              btnActive ? styles.btn__active : styles.btn__inactive
            }`}
            type="button"
            onClick={(e: any) => handleSignup()}
          >
            Signup with Email
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
