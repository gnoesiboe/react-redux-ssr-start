// @flow

import thunkMiddleware from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import { applyMiddleware } from 'redux'

export function createMiddlewareChain(): Function {
    var middlewares: Array<Function> = [
        thunkMiddleware,
        promiseMiddleware()
    ];

    return applyMiddleware(...middlewares);
}
