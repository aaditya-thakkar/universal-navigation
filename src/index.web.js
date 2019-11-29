import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

const style = document.createElement('style');
style.type = 'text/css';

// Inject stylesheet
document.head.appendChild(style);
ReactDOM.render(<App />, document.getElementById('root'));
