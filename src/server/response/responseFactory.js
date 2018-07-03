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
import Loadable from 'react-loadable';
import { getBundles } from 'react-loadable/webpack';
import moduleNameToWebpackChunkMapping from './../../../data/module-name-to-webpack-chunk-mapping.json';

export type RouterContext = {
    notFound: boolean,
    redirectTo: ?string
};

export function createGetResponseBody(path: string, store: Store<Function, Object>, routerContext: Object): string {

    // use serialize to escape html and script tags in json (XSS attacks)
    var serializedStoreState: string = serialize(store.getState());

    // after rendering to string, this array will hold all module names of all the lazy loaded modules that were
    // rendered for this request. We can use this later on to determine the webpack chunks they belong to, so we
    // can supply this information to the client-side, so that it is not upset about the fact that the lazy loaded
    // content is already there..
    // @see https://github.com/jamiebuilds/react-loadable#------------server-side-rendering
    var detectedLazyLoadingModules: Array<string> = [];

    var content: string = renderToString(
        <Loadable.Capture report={ (moduleName: string) => detectedLazyLoadingModules.push(moduleName) }>
            <Provider store={ store }>
                <StaticRouter location={ path } context={ routerContext }>
                    { renderRoutes(routes) }
                </StaticRouter>
            </Provider>
        </Loadable.Capture>
    );

    var webpackChunksToLazyLoad: Array<Object> = getBundles(moduleNameToWebpackChunkMapping, detectedLazyLoadingModules),
        lazyLoadedComponentsToLoad = webpackChunksToLazyLoad.map((webpackChunk: { file: string }) => `<script src="/${webpackChunk.file}"></script>`);

    // get SEO / sharing meta properties
    var metaProperties: { title: Object, meta: Object } = Helmet.renderStatic();

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
        ${ lazyLoadedComponentsToLoad.join('\n') }
        <script src="bundle.js"></script>
        <script src="http://localhost:35729/livereload.js"></script>
    </body>
</html>
    `;
}

export function determineStatusCode(routerContext: RouterContext): number {
    if (routerContext.notFound === true) {
        return 404;
    }

    if (routerContext.redirectTo) {
        return 301;
    }

    return 200;
}
