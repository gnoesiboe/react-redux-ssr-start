// @flow

import { connect } from 'react-redux';
import React from 'react';
import type { PostCollection } from '../../../../model/type';
import type { GlobalState } from '../../../../redux/state/type';

type Props = {
    posts: PostCollection,
    dispatch: Function
};

type ConnectedProps = {
    posts: PostCollection
};

class Posts extends React.Component<Props> {

    render() {
        console.log(this.props.posts);

        return (
            <div>@todo posts</div>
        );
    }
}

function _mapGlobalStateToProps(globalState: GlobalState): ConnectedProps {
    return {
        posts: globalState.posts
    };
}

export default connect(_mapGlobalStateToProps)(Posts);
