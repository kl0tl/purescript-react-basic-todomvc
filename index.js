import React from 'react';
import ReactDOM from 'react-dom';
import createReactClass from 'create-react-class';
import {app as App} from './dce-output/Todo.App';

React.createClass = createReactClass;

function main() {
  ReactDOM.render(<App />, document.getElementById('app'));
}

console.log('Starting app');
main();
