import { createMiddlewareChain } from './middlewareFactory';
import { createReducersChain } from '../../shared/redux/reducers';
import { createStore as createReduxStore } from 'redux';
import type { Store } from 'redux';

export function createStore() : Store {
    var middlewareChain: Function = createMiddlewareChain(),
        reducers: Function = createReducersChain(),
        initialState: Object = {};

    return createReduxStore(reducers, initialState, middlewareChain);
}
