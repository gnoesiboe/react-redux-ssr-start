// @flow

import 'babel-polyfill';
import express from 'express';
import { createGetResponseBody, determineStatusCode } from './response/responseFactory';
import { createStore } from './redux/storeFactory';
import { extractAllDataLoaderPromisesForCurrentRoute } from './helper/dataLoaderExtractionHelper';

var app = express();

app.use(express.static('public'));

app.get('*', (request: Object, response: Object) => {
    var store = createStore(),
        allDataLoaderPromises = extractAllDataLoaderPromisesForCurrentRoute(request.path, store);

    Promise.all(allDataLoaderPromises).then(() => {
        var routerContext = {};

        var body = createGetResponseBody(request.path, store, routerContext),
            statusCode = determineStatusCode(routerContext);

        response.status(statusCode);
        response.send(body);
    });
});

app.listen(3000, () => {

    // $ExpectError
    console.log(`[${process.env.NODE_ENV}] listening on port 3000..`);
});
