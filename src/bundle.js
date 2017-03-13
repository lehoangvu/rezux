import jQuery from 'jquery';
import React from 'react';
import { Router, Route, IndexRoute, browserHistory, hashHistory } from 'react-router';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
// import Routes from './routes';
import reducer from './reducers';
import WithStylesContex from './global/WithStylesContex';

window.jQuery = jQuery;
window.$ = jQuery;

import App from './components/App';
import ContainerPlaylist from './containers/ContainerPlaylist';
import ContainerPlaylistPopup from './containers/ContainerPlaylistPopup';
import ContainerPlayer from './containers/ContainerPlayer';

const basePath = typeof _basePath !== 'undefined' ? _basePath : '/';

const promiseMiddleware = () => {
    return next => action => {
        const { promise, type, ...rest } = action;
        if (!promise) return next(action);

        const SUCCESS = type;
        const REQUEST = `${type}_REQUEST`;
        const FAILURE = `${type}_FAILURE`;
        next({ ...rest, type: REQUEST });

        return promise.then(res => {
            next({ ...rest, res, type: SUCCESS });
            return true;
        }).catch(error => {
            next({ ...rest, error, type: FAILURE });
            console.log(error);
            return false;
        });
    };
};

const middleWare = [thunk, promiseMiddleware];

const store = createStore(reducer, [], applyMiddleware(...middleWare));

render(
    <WithStylesContex onInsertCss={styles => styles._insertCss()}>
        <Provider store={store}>
            <Router history={browserHistory}>
                <Route component={App}>
                    <Route path={basePath} components={()=>(<div>
                        <ContainerPlaylist />
                        <ContainerPlayer />
                        </div>
                    )} >
                    </Route>
                </Route>
            </Router>
        </Provider>
    </WithStylesContex>,
	document.getElementById('root')
);
