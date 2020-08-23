/* import validator from 'validator';
console.log(validator.isEmail('hh@gkd.com'));
*/
import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp'
import 'normalize.css/normalize.css';

import './styles/styles.scss';

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))
