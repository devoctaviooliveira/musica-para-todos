import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Signup from './Signup';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/home' element={<App />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);