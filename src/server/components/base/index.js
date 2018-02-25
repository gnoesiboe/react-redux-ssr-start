// @flow

import React, { Component } from 'react';
import { renderRoutes } from 'react-router-config';
import { Link } from 'react-router-dom';
import { createPostsPath, createHomePath } from '../../../shared/router/urlGenerator';

type Props = {
    route: {
        routes: Array<Object>
    }
}

export default class Base extends Component<Props> {

    render() {
        return (
            <div>
                <h1>Hello world!</h1>
                <ul>
                    <li>
                        <Link to={ createHomePath() }>Home</Link>
                    </li>
                    <li>
                        <Link to={ createPostsPath() }>Posts</Link>
                    </li>
                </ul>
                { renderRoutes(this.props.route.routes) }
            </div>
        );
    }
}
