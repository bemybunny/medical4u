import React,{useState} from 'react'
import './emergency.css'
import Nav from './Nav'
import Chatbot from './Chatbot'
const EmergencyContact = () => {
  
      const [name, setName] = useState('');
      const [relation, setRelation] = useState('');
      const [phone, setPhone] = useState('');
      const [relatives, setRelatives] = useState([]);
    
      const handleAddRelative = () => {
        if (name && relation && phone) {
          const newRelative = {
            name: name,
            relation: relation,
            phone: phone,
          };
    
          setRelatives([...relatives, newRelative]);
    
          // Clear the input fields
          setName('');
          setRelation('');
          setPhone('');
        }
      };
    
      const handleDeleteRelative = (index) => {
        const updatedRelatives = relatives.filter((_, i) => i !== index);
        setRelatives(updatedRelatives);
      };
    
      return (
        <div className="relative-form-container">
        <Nav/>
          <div className="left-panel">
            <div className="input-container">
              <input type="text" placeholder="Relative's Name" value={name} onChange={(e) => setName(e.target.value)}
              />
              <input type="text" placeholder="Relation" value={relation} onChange={(e) => setRelation(e.target.value)}
              />
              <input type="text" placeholder="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)}
              />
              <button className="add-button" onClick={handleAddRelative}>
                Add Relative
              </button>
            </div>
          </div>
          <div className="right-panel">
            <ul className="relative-list">
              {relatives.map((relative, index) => (
                <div>
                <li key={index} className="relative-item">
                  <div>
                    <span>Name: {relative.name}</span>
                    <br/>
                    <span>Relation: {relative.relation}</span>
                    <br/>
                    <span>Phone: {relative.phone}</span>
                  </div>
                </li>
                <button
                    className="delete-button"
                    onClick={() => handleDeleteRelative(index)}
                  >
                    Delete
                  </button>
                </div>
                
              ))}
            </ul>
            </div>
            <Chatbot/>
          </div>
  );
}

export default EmergencyContact