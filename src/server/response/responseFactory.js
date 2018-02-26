// @flow

import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import routes from '../../shared/router/routes';
import { Store } from 'redux';
import { Provider } from 'react-redux';

export function createGetResponse(path: string, store: Store): string {

    // @todo use router context to determine if a not found or redirect response is to be returned
    var routerContext = {};

    var content: string = renderToString(
        <Provider store={ store }>
            <StaticRouter location={ path } context={ routerContext }>
                { renderRoutes(routes) }
            </StaticRouter>
        </Provider>
    );

    return `
<html>
    <head>
        <title>React-Redux-SSR-start</title>
    </head>
    <body>
        <div id="js-app-root">${content}</div>
        <script src="bundle.js"></script>
    </body>
</html>
    `;
}
