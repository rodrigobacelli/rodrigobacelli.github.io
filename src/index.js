import 'babel-core/polyfill';
import React from 'react';
import { render } from 'react-dom';
import Root from './cointainers/Root';
import configureStore from './store/configureStore';
import './css/bootstrap.min.css';
import './css/styles.css';
//Configure Redux Store
const store = configureStore();

//Renders Root component
render(<Root store={store} />, document.getElementById('root'));