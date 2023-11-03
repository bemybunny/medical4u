import React from 'react'
import './chatbot.css'
import Nav from './Nav';
const Chatbot = () => {
  return (
    <div className="chatbot">
        <Nav />
        <df-messenger
        intent="WELCOME"
        chat-title="CHIKITSAKSEVAK"
        agent-id="42bff052-00e2-49c8-8326-7d86e2255139"
        language-code="en"
      ></df-messenger>
    </div>
  )
}

export default Chatbot