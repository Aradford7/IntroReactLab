import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
    //this is like const app = require('/App') newer js using babel
import * as serviceWorker from './serviceWorker';

//ReactDom.render, it puts react app on page
    //first argument is the component
ReactDOM.render(<App/>, document.getElementById('root'));//check passing data didn do anything

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
