import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./style.css";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBy9VaOxHWNLfxJfqfHmMY-nppHNa3zfRI",
  authDomain: "mastermind-836bd.firebaseapp.com",
  projectId: "mastermind-836bd",
  storageBucket: "mastermind-836bd.appspot.com",
  messagingSenderId: "648311246509",
  appId: "1:648311246509:web:3d5ac05255fb5deda54024",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
