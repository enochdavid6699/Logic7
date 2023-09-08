import './App.css';
import Navbar from './myComponents/navBar';
import Home from './myComponents/home'
import Aboutus from './myComponents/aboutUs'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (

    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about-us' element={<Aboutus />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
