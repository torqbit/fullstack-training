import { useState } from "react";
import { useRouter } from "next/router";
import styles from '../styles/signIn.module.css'
export default function Signin() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem("user") || "{}");

    if (storedUser.email === formData.email && storedUser.password === formData.password) {
      localStorage.setItem("isAuthenticated", "true"); // Mark user as logged in
      router.push("/portfolio"); // Redirect to first page
    } else {
      alert("Invalid credentials!");
    }
  };

  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <img src='./'></img>
        <h5>Welcome back to Torqbit</h5>
          <form onSubmit={handleSubmit}>
            <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
            <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
            <button type="submit">Login with Email</button>
          </form>
      </div>
    </div>
  );
}
