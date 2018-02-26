// @flow

import { connect } from 'react-redux';
import React from 'react';
import type { PostCollection } from '../../../../model/type';
import type { GlobalState } from '../../../../redux/state/type';
import { createFetchPostsAction } from '../../../../redux/action/factory/postActionFactory';
import type { Post } from '../../../../model/type';
import type { Store, Dispatch } from 'redux';
import { Helmet } from 'react-helmet';

type Props = {
    posts: PostCollection,
    dispatch: Dispatch
};

type ConnectedProps = {
    posts: PostCollection
};

class Posts extends React.Component<Props> {

    componentDidMount(): void {
        var { dispatch } = this.props;

        dispatch(
            createFetchPostsAction()
        );
    }

    _renderPost(post: Post) {
        return (
            <li key={ post.id }>
                { post.title }
            </li>
        );
    }

    render() {
        var { posts } = this.props;

        return (
            <div className="posts">
                <Helmet>
                    <title>Posts | React Redux SSR start</title>
                </Helmet>
                <ul>
                    { posts.map((post: Post) => this._renderPost(post)) }
                </ul>
            </div>
        );
    }
}

export function loadData(store: Store): void {
    return store.dispatch(
        createFetchPostsAction()
    );
}

function _mapGlobalStateToProps(globalState: GlobalState): ConnectedProps {
    return {
        posts: globalState.posts
    };
}

export default connect(_mapGlobalStateToProps)(Posts);
