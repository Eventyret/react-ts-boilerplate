import React from 'react';
import ReactDOM from 'react-dom';
const test = <div>Hello world</div>;

const root = document.createElement('div');
document.body.appendChild(root);
ReactDOM.render(test, root);
