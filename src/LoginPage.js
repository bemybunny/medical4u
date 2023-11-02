import React, { useState } from "react";
import { auth } from "./FirebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
// import './Contact.css'
import "./Login.css";
import { FcGoogle } from "react-icons/fc";
import {signInWithPopup, GoogleAuthProvider } from "firebase/auth";
function LoginPage() {
  const [login, setLogin] = useState(false);
  const [user, setUser] = useState(null); 
  const history = useNavigate();
  const provider = new GoogleAuthProvider();
  const handleSubmit = (e, type) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    if (type === "signup") {
      createUserWithEmailAndPassword(auth, email, password)
        .then((data) => {
          console.log(data, "authData");
          history("/Home");
        })
        .catch((err) => {
          alert(err.code);
          setLogin(false);
        });
    } else {
      signInWithEmailAndPassword(auth, email, password)
        .then((data) => {
          console.log(data, "authData");
          history("/Home");
          setUser(user)
        })
        .catch((err) => {
          alert(err.code);
        });
      }
    }
    const SIGN_IN_WITH_GOOGLE = () => {
      signInWithPopup(auth, provider)
        .then((result) => {
        const user = result.user;
        console.log("user >>>", user)
         setLogin(true)
         history("/Home");
      }).catch((error) => {
        const errorCode = error.code;
        alert(errorCode)
      });
    

  };
  return (
    <div className="Login">
      <div className="row">
        <div
          className={login === false ? "acitveColor" : "pointer"}
          onClick={() => setLogin(false)}
        >
          SignUp
        </div>
        <div
          className={login === true ? "acitveColor" : "pointer"}
          onClick={() => setLogin(true)}
        >
          SignIn
        </div>
      </div>
      <form
        className="formele"
        onSubmit={(e) => handleSubmit(e, login ? "signin" : "signup")} >
        <input name="email" placeholder="Email" />
        <input name="password" type="password" placeholder="Password" />
        <button>{login ? "SignIn" : "SignUp"}</button>
      </form>
      <button onClick= {SIGN_IN_WITH_GOOGLE} className="google googlelogin">Sign in with Google<FcGoogle size={22} className="icon" /></button>
    </div>
  );
}

export default LoginPage;
