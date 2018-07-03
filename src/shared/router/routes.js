// @flow

import React from 'react';
import Base from '../components/base';
import Posts, { loadData as loadPostsData } from '../components/base/components/posts';
import NotFound from '../components/base/components/notFound';
import RedirectHome from '../components/base/components/redirectHome/index';
import { createPostsPath, createRedirectHomePath, createContactPath, createHomePath } from './urlGenerator';
import Loadable from 'react-loadable';
import Loading from '../components/base/components/loading';
import Home from '../components/base/components/home';

var LazyLoadingContact = Loadable({
    loader: () => import(/* webpackChunkName: "contact" */ '../components/base/components/contact'),
    loading: Loading
})


export default [
    {
        component: Base,
        routes: [
            {
                path: createHomePath(),
                component: Home,
                exact: true
            },
            {
                path: createPostsPath(),
                component: Posts,
                exact: true,
                loadData: loadPostsData
            },
            {
                path: createRedirectHomePath(),
                component: RedirectHome
            },
            {
                path: createContactPath(),
                component: LazyLoadingContact
            },

            // should be at the bottom, to catch every request that does not match one of the paths above
            {
                component: NotFound
            }
        ]
    }
]
