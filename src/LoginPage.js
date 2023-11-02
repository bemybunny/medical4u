import React, { useState } from 'react';
import { database } from './FirebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
// import './Contact.css'
import './Login.css'
function LoginPage() {
  const [login, setLogin] = useState(false);
  const history = useNavigate();

  const handleSubmit = (e, type) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    if (type === 'signup') {
      createUserWithEmailAndPassword(database, email, password)
        .then(data => {
          console.log(data, 'authData');
          history('/Home');
        })
        .catch(err => {
          alert(err.code);
          setLogin(true)
        });
    } else {
      signInWithEmailAndPassword(database, email, password)
        .then(data => {
          console.log(data, 'authData');
          history('/Home');
        })
        .catch(err => {
          alert(err.code);
        });
    }
  }

  return (
    <div className="Login">
      <div className="row">
        <div className={login===false?'acitveColor':'pointer'} onClick={()=>setLogin(false)}>SignUp</div>
        <div className={login===true?'acitveColor':'pointer'}  onClick={()=>setLogin(true)}>SignIn</div>
      </div>
      <form className="formele" onSubmit={e => handleSubmit(e, login ? 'signin' : 'signup')}>
        <input name="email" placeholder="Email" />
        <input name="password" type="password" placeholder="Password" />
        <button>{login?'SignIn':'SignUp'}</button>
      </form>
    </div>
  );
}

export default LoginPage;
