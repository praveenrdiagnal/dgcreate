import React from 'react';
// import ReactDOM from 'react-dom';
import ReactTV from 'react-tv';
import './index.scss';
import ReactTVApp from './App';
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
ReactTV.render(<ReactTVApp/>, document.querySelector('#root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
