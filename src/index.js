import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import registerServiceWorker from './registerServiceWorker';
import rootStore from './models/rootStore';
import {Provider} from 'mobx-react';

ReactDOM.render(
    <Provider store={rootStore}>
        <App />
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
