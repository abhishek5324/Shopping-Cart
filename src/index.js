import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from 'firebase';
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDi5u-ISrOgWXgIwftxOLWtpT_1QRtioy8",
  authDomain: "cart-49015.firebaseapp.com",
  projectId: "cart-49015",
  storageBucket: "cart-49015.appspot.com",
  messagingSenderId: "297330500180",
  appId: "1:297330500180:web:2d20e8ca8440b6017f83c1"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
ReactDOM.render(

    <App />
 ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

