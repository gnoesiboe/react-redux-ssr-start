// @flow

import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import routes from '../shared/router/routes';
import { renderRoutes } from 'react-router-config';
import { Provider } from 'react-redux';
import { createStore } from './redux/storeFactory';

ReactDOM.hydrate(
    <Provider store={ createStore() }>
        <BrowserRouter>
            { renderRoutes(routes) }
        </BrowserRouter>
    </Provider>,
    document.getElementById('js-app-root')
);
