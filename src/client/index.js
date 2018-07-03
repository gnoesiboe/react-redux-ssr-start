// @flow

import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import routes from '../shared/router/routes';
import { renderRoutes } from 'react-router-config';
import { Provider } from 'react-redux';
import { createStore } from './redux/storeFactory';
import Loadable from 'react-loadable';

// when there have been parts preloaded on the server, we need to get them first to prevent
// warnings in our application that components are not in the state that they are expected 
// to be in at this point
Loadable.preloadReady().then(() => {

    // $ExpectError (@see https://github.com/facebook/flow/pull/5074)
    ReactDOM.hydrate(
        <Provider store={ createStore() }>
            <BrowserRouter>
                { renderRoutes(routes) }
            </BrowserRouter>
        </Provider>,
        document.getElementById('js-app-root')
    );
});
