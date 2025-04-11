import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './App.css';

// Adicione os scripts do Font Awesome e Google Fonts no seu index.html
// Ou use react-helmet para adicioná-los dinamicamente

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);