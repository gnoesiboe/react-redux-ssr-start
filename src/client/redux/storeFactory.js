// @flow

import { createMiddlewareChain } from './middlewareFactory';
import { createReducersChain } from '../../shared/redux/reducers';
import { createStore as createReduxStore } from 'redux';
import type { Store } from 'redux';

export function createStore() : Store<Function, Object> {
    var middlewareChain: Function = createMiddlewareChain(),
        reducers: Function = createReducersChain();

    return createReduxStore(
        reducers,
        window.INITIAL_STORE_STATE, // import Redux store data from backend
        middlewareChain
    );
}
