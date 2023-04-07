import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../main";
import masterUser from "/assets/img/master_user.png";
import Swal from "sweetalert2";
import styles from "../signup.module.css";

const Signup = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        navigate("/login");
        Swal.fire({
          position: "center",
          icon: "success",
          title: "You have successfully registered",
          showConfirmButton: false,
          timer: 2500,
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
      });
  };

  return (
    <>
      <main className={styles.main}>
        <section className={styles.splitScreen}>
          <div className={styles.left}>
            <img src={masterUser} alt="" />
          </div>
          <div className={styles.register}>
            <form onSubmit={onSubmit}>
              <header>
                <h3>Sign Up</h3>
              </header>
              <div className={styles.formGroup}>
                <label htmlFor="email-address">Email</label>
                <input
                  id="email-address"
                  label="Email address"
                  value={email}
                  type="email"
                  required
                  placeholder=""
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="password">Password</label>
                <input
                  id="password"
                  label="Create password"
                  value={password}
                  type="password"
                  required
                  placeholder=""
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className={styles.rememberMe}>
                <input type="checkbox" name="remember" id="remember" />
                <label htmlFor="remember">Remember me</label>
              </div>
              <div className={styles.formGroup}>
                <button type="submit" onClick={onSubmit}>
                  Sign Up
                </button>
              </div>
              <div className={styles.formGroup}>
                <span className={styles.messageLog}>
                  Already have an account? Log in{" "}
                  <NavLink className={styles.signLink} to="/login">
                    Here
                  </NavLink>
                </span>
              </div>
            </form>
          </div>
        </section>
      </main>
    </>
  );
};

export default Signup;
