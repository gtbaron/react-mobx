import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import store from "./models/root-store";


ReactDOM.render(<App store={store} />, document.getElementById('root'));
registerServiceWorker();
