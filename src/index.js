import React from 'react';
import ReactDOM from 'react-dom';
import './css/bootstrap.css';
import './css/normalize.css';
import './css/main.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
