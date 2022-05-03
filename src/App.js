import React from 'react';
import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';
import Login from './Components/Login';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import NotFound from './Components/NotFound';
import Register from './Components/Register';
import Footer from './Components/Footer';
import StartUps from './Components/StartUps';
import About from './Components/About';
import Help from './Components/Help';

export default function App() {
  return (
    <Router>
    <div className="App">
      <Header/>
      <Routes>
      <Route path='/' exact element={<Main/>} />
      <Route path='/login' exact element={<Login/>} />
      <Route path='/register' exact element={<Register/>} />
      <Route path='/startups' exact element={<StartUps/>} />
      <Route path='/about' exact element={<About/>} />
      <Route path='/help' exact element={<Help/>} />
      <Route path='*' exact element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </div>
    </Router>
  );
}

