// @flow

import type { Post } from '../type';
import type { PostsEntry } from '../../api/type';
import type { Action, ActionData } from '../../redux/action/type';
import uuid from 'uuid';

export function createPostCollectionFromFetchPostsFulfilledAction(action: Action): Array<Post> {
    var apiData : Array<PostsEntry> = (action.payload.data: ActionData);

    return apiData.map((apiDataItem: Object): Post => {
        return {
            id: uuid(),
            externalId: apiDataItem.id,
            title: apiDataItem.title,
            body: apiDataItem.body
        };
    })
}
