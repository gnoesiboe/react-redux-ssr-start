// @flow

import React from 'react';
import { renderToString } from 'react-dom/server';
import HelloWorld from '../components/HelloWorld';

export function createGetResponse(): string {
    var content: string = renderToString(
        <HelloWorld/>
    );

    return `
<html>
    <head>
        <title>React-Redux-SSR-start</title>
    </head>
    <body>
        <div id="js-app-root">${content}</div>
        <script src="bundle.js"></script>
    </body>
</html>
    `;
}
