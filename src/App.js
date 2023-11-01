import './App.css';
import MedicalNote from './MedicalNote';
import Contact from './Contact';
import Nav from './Nav';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';

function App() {
  return (
    <Router> {/* Wrap the entire app with the Router */}
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/MedicalNote" element={<MedicalNote />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;

