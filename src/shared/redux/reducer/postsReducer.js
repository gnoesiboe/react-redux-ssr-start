// @flow

import type { PostCollection } from '../../model/type';
import { FULFILLED } from 'redux-promise-middleware';
import type { Action } from '../action/type';
import { FETCH_POSTS } from '../action/type';
import { createPostCollectionFromFetchPostsFulfilledAction } from '../../model/factory/postFactory';

export default function postsReducer(currentState: PostCollection = [], action: Action): PostCollection {
    switch (action.type) {
        case `${FETCH_POSTS}_${FULFILLED}`:
            return createPostCollectionFromFetchPostsFulfilledAction(action);

        default:
            return currentState;
    }
}
