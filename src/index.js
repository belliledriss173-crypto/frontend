import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Routes,Route,BrowserRouter } from "react-router-dom";
import Navbar from './components/navbar/Navbar';
import Carousel from './components/carousel/Carousel';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
  <Routes>
      <Route path="/App" element={<App/>}/>
     <Route path="/navbar" element={<Navbar/>}/>
    <Route path="/Carousel" element={<Carousel/>}/>

     <Route path="/*" element={<App/>}/>
  </Routes>

  </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
