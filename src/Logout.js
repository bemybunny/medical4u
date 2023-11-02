import React from 'react'
import {signOut} from  'firebase/auth'
import {auth} from './FirebaseConfig';
import {useNavigate} from 'react-router-dom';
import './App.css'
 const Logout = () => { 

  const history = useNavigate()

  const logout=()=>{
    signOut(auth).then(val=>{
        console.log(val,'val')
        history('/')
    })
  }

  return (
    <div>
        <button className="button" onClick={logout}>Logout</button>
  </div>
  )
}

export default Logout