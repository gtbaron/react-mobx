import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import registerServiceWorker from './registerServiceWorker';
import articleManager from './models/articleManager';
import {Provider} from 'mobx-react';

ReactDOM.render(
    <Provider articleManager={articleManager}>
        <App />
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
