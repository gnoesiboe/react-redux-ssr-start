// @flow

import React, { Component } from 'react';
import { renderRoutes } from 'react-router-config';
import { Link } from 'react-router-dom';
import { createPostsPath, createHomePath, createContactPath } from '../../router/urlGenerator';
import { Helmet } from 'react-helmet';

type Props = {
    route: {
        routes: Array<Object>
    }
}

export default class Base extends Component<Props> {

    render() {

        return (
            <div>
                <Helmet>
                    <title>React Redux SSR start</title>
                    <meta property="og:title" content="React Redux SSR Start" />
                </Helmet>
                <h1>Hello world!</h1>
                <ul>
                    <li>
                        <Link to={ createHomePath() }>Home</Link>
                    </li>
                    <li>
                        <Link to={ createPostsPath() }>Posts</Link>
                    </li>
                    <li>
                        <Link to={ createContactPath() }>Contact</Link>
                    </li>
                </ul>
                { renderRoutes(this.props.route.routes) }
            </div>
        );
    }
}
