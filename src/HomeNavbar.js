import React,{useState} from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { auth } from "./FirebaseConfig";
import "./Login.css";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

function HomeNavbar(){
    const [login, setLogin] = useState(false);
    const history = useNavigate();
    const provider = new GoogleAuthProvider();
    const SIGN_IN_WITH_GOOGLE = () => {
        signInWithPopup(auth, provider)
          .then((result) => {
            const user = result.user;
            console.log("user >>>", user);
            setLogin(true);
            history("/HomePage");
          })
          .catch((error) => {
            const errorCode = error.code;
            alert(errorCode);
          });
      };
    return(
        <div className="HomeNavbar">
           <div className="logo">VitalEase</div>
           <div className="log">
           <Link to="/LoginPage"><img className="logopic" src="email.png" alt=""/></Link>
           <img className="logopic" src="google.png" alt="" onClick={SIGN_IN_WITH_GOOGLE}>
           </img>
           </div>
        </div>
    )
}
export default HomeNavbar;