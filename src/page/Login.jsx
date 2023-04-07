import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../main";
import { NavLink, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useContext } from "react";
import { CartContext } from "../context/ShoppingCartContext";
import masterUser from "/assets/img/master_user.png";
import styles from "../login.module.css";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const { setIsLogged } = useContext(CartContext);

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const onLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, formData.email, formData.password)
      .then((userCredential) => {
        // Log in
        const user = userCredential.user;
        setIsLogged(true);
        navigate("/");
        Swal.fire({
          position: "center",
          icon: "success",
          title: `Thank you ${user.email}! You have logged in`,
          showConfirmButton: false,
          timer: 2500,
        });
      })
      .catch((error) => {
        setFormData((prevData) => ({
          ...prevData,
          error: "Email and/or password are incorrect",
        }));
      });
  };

  return (
    <main className={styles.main}>
      <section className={styles.splitScreen}>
        <div className={styles.left}>
          <img src={masterUser} alt="" />
        </div>
        <div className={styles.login}>
          <form onSubmit={onLogin}>
            <header>
              <h3>Login</h3>
            </header>
            <div className={styles.formGroup}>
              <label htmlFor="email-address">Email:</label>
              <input
                id="email-address"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={onInputChange}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="password">Password:</label>
              <input
                id="password"
                name="password"
                type="password"
                required
                value={formData.password}
                onChange={onInputChange}
              />
            </div>
            <div className={styles.rememberMe}>
              <input type="checkbox" name="remember" id="remember" />
              <label htmlFor="remember">Remember me</label>
            </div>
            <div className={styles.formGroup}>
              <button type="submit">Log In</button>
            </div>
            <div className={styles.formGroup}>
              <span className={styles.messageLog}>
                Don't have an account?{" "}
                <NavLink className={styles.logLink} to="/signup">
                  Sign Up
                </NavLink>
              </span>
            </div>
          </form>
          {formData.error && (
            <div className={styles.errorMessage}>{formData.error}</div>
          )}
        </div>
      </section>
    </main>
  );
};

export default Login;
