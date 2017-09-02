// import React from 'react';
// import ReactDOM from 'react-dom';
import './index.css';
import App, {Base} from './App';
import registerServiceWorker from './registerServiceWorker';

Base.start('#root', App);
registerServiceWorker();
