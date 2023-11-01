import React ,{useRef} from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser';

function Contact() {
      const form = useRef();

      const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_ov18nwn', 'template_ry0h6zm', form.current, 'mNPOPdlWCV689X5t1')
          .then((result) => {
              console.log(result.text);
              console.log("message sent");
          }, (error) => {
              console.log(error.text);
          });
      };
  return (
    <div className="Contact">
          <form ref={form} onSubmit={sendEmail}>
            <h3>GET IN TOUCH</h3>
            <input type ="text" id="name" placeholder="Your Name" required name="user_name"></input>
            <input type ="email" id="email" placeholder="Email Id" required name="user_email"></input>
            <textarea id="message" placeholder="How can i help you?" name="message"></textarea>
            <button type="submit">Submit</button>
          </form>
    </div>
  )
}


export default Contact