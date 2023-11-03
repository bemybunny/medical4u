import React from 'react';
import Nav from './Nav'
import Chatbot from './Chatbot'
import Freq from './Freq'
import About from './About'
import Whyus from './Whyus'
function HomePage(){
    return(
        <div>
           <Nav/>
           <About/>
           <Whyus/>
           <Freq/>
           <Chatbot/>
        </div>
    );
}

export default HomePage;