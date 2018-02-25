// @flow

import React from 'react';
import Base from '../../server/components/base';
import Posts from '../../server/components/base/components/posts/index';
import { createPostsPath } from './urlGenerator';

export default [
    {
        component: Base,
        routes: [
            {
                path: createPostsPath(),
                component: Posts,
                exact: true
            }
        ]
    }
]
