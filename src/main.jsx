import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfR8FOqu1WSEWC24YXiGeojTMqKI5YNDM",
  authDomain: "coderhouse-ecommerce-b96dd.firebaseapp.com",
  projectId: "coderhouse-ecommerce-b96dd",
  storageBucket: "coderhouse-ecommerce-b96dd.appspot.com",
  messagingSenderId: "938906410662",
  appId: "1:938906410662:web:31b048e99504a0c77b1e67",
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
