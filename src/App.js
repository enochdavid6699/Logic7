// import './App.css';
import Navbar from './myComponents/navBar';
import Home from './myComponents/home'
import Aboutus from './myComponents/aboutUs'
import Contactus from './myComponents/contactUs'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (

    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about-us' element={<Aboutus />} />
          <Route path='/contact-us' element={<Contactus />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
