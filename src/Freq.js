import React from 'react';
import './freq.css';
const Freq=()=>{
    return(
        <div class="faq">
        <h2 className="frequent">Frequently Asked Questions</h2>
        <ul class="accordion">
            <li>
                <input type="radio" name="accordion" id="first"/>
                <label for="first">What is Vital Ease?</label> 
                <div class="content">
                    <p>VitalEase is a user-friendly healthcare website designed to assist elderly users in managing medication, accessing emergency contacts, communicating with caregivers.</p>
                </div>
            </li>
            <li>
                <input type="radio" name="accordion" id="second"/>
                <label for="second">What are the services we are providing?</label> 
                <div class="content">
                    <p>VitalEase offers user-friendly healthcare services for the elderly, aiding in medication management, access to emergency contacts, communication with caregivers, and valuable health information, including dietary guidance and general health tips.</p>
                </div>
            </li>
            <li>
                <input type="radio" name="accordion" id="third"/>
                <label for="third">How it benefits the elderly people?</label> 
                <div class="content">
                    <p>VitalEase empowers the elderly by simplifying medication management, enabling swift access to emergency help, fostering seamless communication with caregivers, and offering personalized health guidance, enhancing overall well-being.</p>
                </div>
            </li>
            <li>
                <input type="radio" name="accordion" id="fourth"/>
                <label for="fourth">How do I cancel?</label> 
                <div class="content">
                    <p>VitalEase eases the caretaker's role by enabling direct communication with elderly individuals, ensuring their medication adherence, and offering timely alerts in emergency situations, fostering peace of mind and efficient caregiving.</p>
                </div>
            </li>
            </ul>
        </div>
    );
}

export default Freq;