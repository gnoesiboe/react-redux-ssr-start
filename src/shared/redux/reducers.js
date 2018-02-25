// @flow

import postsReducer from './reducer/postsReducer';
import { combineReducers } from 'redux';

export function createReducersChain(): Function {
    return combineReducers({
        posts: postsReducer
    });
};
