// @flow

import React from 'react';

type Props = {
    error: ?Error,
    pastDelay: Boolean,
    retry: Function
};

export default function Loading(props: Props) {
    if (props.error) {
        return (
            <div>
                <h1>Error!</h1>
                <button onClick={ props.retry }>Retry</button>
            </div>
        );
    }

    // only show loader if the loading time exceeds a specific point, to show progress to the user
    // @see https://github.com/jamiebuilds/react-loadable#avoiding-flash-of-loading-component
    if (props.pastDelay) {
        return <h1>Loading...</h1>;
    }

    return null;
}
