// @flow

export const FETCH_POSTS = 'fetch_posts';

export type ActionData = any;
export type ActionMeta = { [key: string]: any };

export type Action = $ReadOnly<{
    type: string,
    payload: {
        data: { [key: string]: any },
        promise: ?Promise<any>
    },
    meta: { [key: string]: any }
}>;

export type FetchPostsAction = $ReadOnly<{
    type: string
}>;
