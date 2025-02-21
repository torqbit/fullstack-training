import { useState } from "react";
import { useRouter } from "next/router";
import styles from '../styles/signUp.module.css'

const Signup = () => {
    const [formData, setFormData] = useState({ name: "", email: "", password: "" });
    const router = useRouter();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.password) {
            alert("Please fill all fields");
            return;
        }
        localStorage.setItem("user", JSON.stringify(formData));
        alert("Signup Successful! Please sign in.");
        router.push("/signin"); // Redirect to Signin page
    };

    return (
      <div className={styles.body}>
        <div className={styles.container}>
            <img src='./'></img>
            <h5>Welcome to Torqbit</h5>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Enter your Name" value={formData.name} onChange={handleChange} required />
                <input type="email" name="email" placeholder="Enter your Email" value={formData.email} onChange={handleChange} required />
                <input type="password" name="password" placeholder="Enter your Password" value={formData.password} onChange={handleChange} required />
                <button type="submit">Signup with Email</button>
            </form>
        </div>
      </div>
    );
};

export default Signup;
