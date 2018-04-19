// @flow

import React from 'react';
import type { RouterContext } from '../../../../../server/response/responseFactory';

type Props = {
    staticContext?: RouterContext
};

export default function NotFound(props: Props) {
    if (typeof props.staticContext !== 'undefined') {
        props.staticContext.notFound = true;
    }

    return (
        <h1>Page not found</h1>
    );
}
