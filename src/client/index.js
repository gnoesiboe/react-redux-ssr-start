import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import Base from '../server/components/base';
import { BrowserRouter } from 'react-router-dom';
import routes from '../shared/router/routes';
import { renderRoutes } from 'react-router-config';

ReactDOM.hydrate(
    <BrowserRouter>
        { renderRoutes(routes) }
    </BrowserRouter>,
    document.getElementById('js-app-root')
);
