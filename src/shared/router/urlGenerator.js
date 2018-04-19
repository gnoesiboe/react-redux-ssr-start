// @flow

const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

export function createHomePath(): string {
    return '/';
}

export function createPostsPath(): string {
    return '/posts';
}

export function createRedirectHomePath(): string {
    return '/redirect-home';
}

export function createPostsApiPath(): string {
    return API_BASE_URL + '/posts';
}
