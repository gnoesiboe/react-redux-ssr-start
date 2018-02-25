import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from '../server/components/HelloWorld';

ReactDOM.hydrate(
    <HelloWorld />,
    document.getElementById('js-app-root')
);

