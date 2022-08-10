import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB-cjh1S5gPnRgqqnaKGCQl5s6QQB_xLyk",
  authDomain: "e-pups-mitienda.firebaseapp.com",
  projectId: "e-pups-mitienda",
  storageBucket: "e-pups-mitienda.appspot.com",
  messagingSenderId: "788537818652",
  appId: "1:788537818652:web:15a8db7383c43840aa29d9"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
