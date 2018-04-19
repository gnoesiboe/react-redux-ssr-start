// @flow

import React from 'react';
import Base from '../components/base';
import Posts, { loadData as loadPostsData } from '../components/base/components/posts';
import NotFound from '../components/base/components/notFound';
import { createPostsPath } from './urlGenerator';

export default [
    {
        component: Base,
        routes: [
            {
                path: createPostsPath(),
                component: Posts,
                exact: true,
                loadData: loadPostsData
            },
            {
                component: NotFound
            }
        ]
    }
]
