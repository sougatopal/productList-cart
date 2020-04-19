import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './components/App';


ReactDOM.render(
    <BrowserRouter>
        <Fragment>
            <Provider >
                <App />
            </Provider>
        </Fragment>
    </BrowserRouter>,
    document.getElementById('root')
);
