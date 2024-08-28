import './App.css';
import React from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
// import { useRef } from 'react';
// import ReactDOM from 'react-dom';



import HomePage from './Components/HomePage';
import AboutUs from './Components/AboutUs';
import Orders from './Components/Orders';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';




function App() {
  return (
<Router>
 <NavBar/>
 <br></br>
 <br></br>
 <br></br>
 <br></br>
  <div>
    <Routes>
      <Route path="/"element={<HomePage/>}/>
      <Route path="/about"element={<AboutUs/>}/>
      <Route path="/orders"element={<Orders/>}/>
    </Routes>
  </div>
  <Footer/>
</Router>
  );
}


export default App;
