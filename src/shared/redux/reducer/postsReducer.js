// @flow

import type { PostCollection } from '../../model/type';
import type { Action } from '../action/type';

export default function postsReducer(currentState: PostCollection = [], action: Action): PostCollection {
    return currentState;
}
