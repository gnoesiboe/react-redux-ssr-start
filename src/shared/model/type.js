// @flow

export type Post = $ReadOnly<{
    id: string,
    externalId: number,
    title: string,
    body: string
}>;

export type PostCollection = Array<Post>;
