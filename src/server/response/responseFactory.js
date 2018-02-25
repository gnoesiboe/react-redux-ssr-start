// @flow

import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import HelloWorld from '../../shared/components/base';
import { renderRoutes } from 'react-router-config';
import routes from '../../shared/router/routes';

export function createGetResponse(path: string): string {

    // @todo use router context to determine if a not found or redirect response is to be returned
    var routerContext = {};

    var content: string = renderToString(
        <StaticRouter location={ path } context={ routerContext }>
            { renderRoutes(routes) }
        </StaticRouter>
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
