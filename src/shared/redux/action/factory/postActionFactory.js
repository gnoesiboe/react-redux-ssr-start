// @flow

import { FETCH_POSTS } from '../type';
import type { Action } from '../type';
import { createPostsApiPath } from '../../../router/urlGenerator';
import * as apiClient from './../../../api/client';
import { createAction } from './actionFactory';

export function createFetchPostsAction(): Function {
    return (dispatch: Function) => {
        var url = createPostsApiPath(),
            promise = apiClient.get(url);

        var action : Action = createAction(FETCH_POSTS, promise);

        return dispatch(action);
    };
}
