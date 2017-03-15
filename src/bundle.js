import jQuery from 'jquery';
import React from 'react';
import { Router, Route, IndexRoute, browserHistory, hashHistory } from 'react-router';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
// import Routes from './routes';
import store from './store';
import WithStylesContex from './global/WithStylesContex';

window.jQuery = jQuery;
window.$ = jQuery;

import App from './components/App';
import ContainerPlaylist from './containers/ContainerPlaylist';
import ContainerPlayer from './containers/ContainerPlayer';

const basePath = typeof _basePath !== 'undefined' ? _basePath : '/';


render(
    <WithStylesContex onInsertCss={styles => styles._insertCss()}>
        <Provider store={store}>
            <Router history={browserHistory}>
                <Route component={App}>
                    <Route path={basePath} components={ContainerPlaylist} >
                    </Route>
                    <Route path={basePath + 'all/:song_id'} components={ContainerPlaylist} >
                    </Route>
                    <Route path={basePath + 'all/:song_id.html'} components={ContainerPlaylist} >
                    </Route>
                    <Route path={basePath + ':playlist_id/:song_id.html'} components={ContainerPlaylist} >
                    </Route>
                </Route>
            </Router>
        </Provider>
    </WithStylesContex>,
	document.getElementById('root')
);
