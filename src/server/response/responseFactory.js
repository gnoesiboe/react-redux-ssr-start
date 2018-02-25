// @flow

export function createGetResponse(content: string): string {
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
