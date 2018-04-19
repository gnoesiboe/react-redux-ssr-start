// @flow

import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import routes from '../../shared/router/routes';
import type { Store } from 'redux';
import { Provider } from 'react-redux';
import serialize from 'serialize-javascript';
import { Helmet } from 'react-helmet';

export type RouterContext = {
    notFound ?: boolean
};

export function createGetResponseBody(path: string, store: Store<Function, Object>, routerContext: Object): string {

    // use serialize to escape html and script tags in json (XSS attacks)
    var serializedStoreState : string = serialize(store.getState());

    var content: string = renderToString(
        <Provider store={ store }>
            <StaticRouter location={ path } context={ routerContext }>
                { renderRoutes(routes) }
            </StaticRouter>
        </Provider>
    );

    // get SEO / sharing meta properties
    var metaProperties = Helmet.renderStatic();

    return `
<html>
    <head>
        <head>
            ${ metaProperties.title.toString() }
            ${ metaProperties.meta.toString() }
        </head>
    </head>
    <body>
        <div id="js-app-root">${ content }</div>
        <script type="text/javascript">
            window.INITIAL_STORE_STATE = ${ serializedStoreState }
        </script>
        <script src="bundle.js"></script>
        <script src="http://localhost:35729/livereload.js"></script>
    </body>
</html>
    `;
}

export function determineStatusCode(routerContext: RouterContext): number {
    if (typeof routerContext.notFound !== 'undefined' && routerContext.notFound === true) {
        return 404;
    }

    return 200;
}
