// @flow

export type Post = $ReadOnly<{
    id: string,
    title: string,
    body: string
}>;

export type PostCollection = Array<Post>;
