// @flow

import 'babel-polyfill';
import express from 'express';
import {createGetResponse} from './response/responseFactory';

var app = express();

app.use(express.static('public'));

app.get('*', (request: Object, response: Object) => {
    var content = createGetResponse();

    response.send(content);
});

app.listen(3000, () => {

    // $ExpectError
    console.log(`[${process.env.NODE_ENV}] listening on port 3000..`);
});
