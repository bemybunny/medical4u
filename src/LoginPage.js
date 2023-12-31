import React, { useState } from "react";
import { auth } from "./FirebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
// import './Contact.css'
import "./Login.css";

function LoginPage() {
  const [login, setLogin] = useState(false);
  const [user, setUser] = useState(null);
  const history = useNavigate();
  const handleSubmit = (e, type) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (type === "signup") {
      createUserWithEmailAndPassword(auth, email, password)
        .then((data) => {
          console.log(data, "authData");
          history("/HomePage");
        })
        .catch((err) => {
          alert(err.code);
          setLogin(false);
        });
    } else {
      signInWithEmailAndPassword(auth, email, password)
        .then((data) => {
          console.log(data, "authData");
          history("/HomePage");
          setUser(user);
        })
        .catch((err) => {
          alert(err.code);
        });
    }
  };
  return (
    <div className="Login">
     <img src="doctor2.png" alt=""></img>
     <div>
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
          className="forminput"
          onSubmit={(e) => handleSubmit(e, login ? "signin" : "signup")}
        >
          <input className="inputlogin" name="email" placeholder="Email" />
          <input className="inputlogin" name="password" type="password" placeholder="Password" />
          <button className="signupbtn">{login ? "SignIn" : "SignUp"}</button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
