import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'amfe-flexible'
import FastClick from 'fastclick'
import registerServiceWorker from './registerServiceWorker';

if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
    }, false);
}

document.documentElement.addEventListener('touchmove',(e)=>{
    e.preventDefault();
},{passive:false});

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
