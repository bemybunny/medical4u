import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'
function Nav() {
  return (
     <div className="nav">
          <span className="portfolio">Care<span className="lio">4</span>U</span>
          <div className="group">
          <ul>
               <li><Link to="/" >Home</Link></li>
               <li><Link to="/MedicalNote" >MedicalNote</Link></li>
               <li><Link to="/Contact" >Contact</Link></li>
          </ul> 
     </div>
               
     </div>
  )
}

export default Nav