// @flow

import React from 'react';
import { Redirect } from 'react-router';
import { createHomePath } from '../../../../router/urlGenerator';
import type { RouterContext } from '../../../../../server/response/responseFactory';

type Props = {
    staticContext ?: RouterContext
}

export default function RedirectHome(props: Props) {
    if (typeof props.staticContext !== 'undefined') {

        // $ExpectError
        props.staticContext.redirectTo = createHomePath();
    }

    return (
        <Redirect to={ createHomePath() } />
    );
}
