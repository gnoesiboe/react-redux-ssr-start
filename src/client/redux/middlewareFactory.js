// @flow

import thunkMiddleware from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import { createLogger } from 'redux-logger';
import { applyMiddleware } from 'redux'

export function createMiddlewareChain(): Function {
    var loggerMiddleware : Function = createLogger({ collapsed: true });

    var middlewares: Array<Function> = [
        thunkMiddleware,
        promiseMiddleware(),
        loggerMiddleware
    ];

    return applyMiddleware(...middlewares);
}
