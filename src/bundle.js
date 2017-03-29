import jQuery from 'jquery';
import React from 'react';
import { Router, Route, IndexRoute, browserHistory, hashHistory } from 'react-router';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import Routes from './routes';
import store from './store';
import WithStylesContex from './global/WithStylesContex';

window.jQuery = jQuery;
window.$ = jQuery;
const basePath = typeof _basePath !== 'undefined' ? _basePath : '/';
window.basePath = basePath;

render(
    <WithStylesContex onInsertCss={styles => Array.isArray(styles) ? styles.map((style)=>{style._insertCss()}): styles._insertCss()}>
        <Provider store={store}>
            <Router history={browserHistory}>
                {Routes}
            </Router>
        </Provider>
    </WithStylesContex>,
	document.getElementById('root')
);