import React from 'react';
import ReactDOM from 'react-dom';
import {app as App} from './src/Todo/App.purs';

function main() {
  ReactDOM.render(<App />, document.getElementById('app'));
}

console.log('Starting app');
main();
