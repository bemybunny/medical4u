import React from 'react'
import './chatbot.css'
import Nav from './Nav';
const Chatbot = () => {
  return (
    <div className="chatbot">
        <Nav />
        <iframe width="350" height="430" allow="microphone;" src="https://console.dialogflow.com/api-client/demo/embedded/42bff052-00e2-49c8-8326-7d86e2255139"></iframe>
    </div>
  )
}

export default Chatbot