import React from 'react';
import './Home.css';
import HomeNavbar from './HomeNavbar';
function Home() {
  return (
        <div  >
          <HomeNavbar/>
          <div className="home">
            <img src="doctor.webp" className="doctor" alt=""/>
          
          <div className="headings">
            <h1>Founded by caregivers, trusted by families</h1>
            <h5>In 2007, a few friends who were each caring for an aging parent noticed the lack of online resources to help them navigate the complexities of caregiving. Not finding what they needed, they decided to create it themselves. The result was Caring.com.

Today, our company is filled with people passionate about serving seniors and caregivers — including you. We’ve assisted millions of families nationwide, and we’re on a mission to help as many as possible through our empathetic, expert guidance.

</h5>
</div>
          </div>
        </div>
  )
}

export default Home