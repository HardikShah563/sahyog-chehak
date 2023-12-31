// importing from react
import React from 'react'
import ReactDOM from 'react-dom/client'
// importing App
import App from './App.jsx'
// importing stylesheet
import "./style/index.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);