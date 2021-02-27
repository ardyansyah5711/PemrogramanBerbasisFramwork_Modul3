import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from "./reportWebVitals";
import Login from './Login';

ReactDom.render (
    <React.StrictMode>
        <Login />
    </React.StrictMode>,
    document.getElementById("root")
);

reportWebVitals();