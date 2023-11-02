import './App.css';
import MedicalNote from './MedicalNote';
import Contact from './Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import VideoCall from './VideoCall'
import RoomPage from './RoomPage'
import Chatbot from './Chatbot';
import LoginPage from './LoginPage';
function App() {
  return (
    <Router> {/* Wrap the entire app with the Router */}
      <div className="App">
        <Routes>
          <Route path="/" element={<LoginPage/>}/>
          <Route path="/Home" element={<Home/>}/>
          <Route path="/MedicalNote" element={<MedicalNote />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/VideoCall" element={<VideoCall/>}>
          </Route>
          <Route path="/room/:roomId" element={<RoomPage/>}/>
          <Route path="/Chatbot" element={<Chatbot/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

