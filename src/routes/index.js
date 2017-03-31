import React from 'react';
import { Router, Route, IndexRoute, browserHistory, hashHistory } from 'react-router';

import App from './../components/App';
import ContainerPlaylist from './../containers/ContainerPlaylist';
import ContainerPhoto from './../containers/ContainerPhoto';

const basePath = typeof _basePath !== 'undefined' ? _basePath : '/';
window.basePath = basePath;

const Routes = 
    <Route path={basePath } component={App}>
        <IndexRoute components={ContainerPlaylist} ></IndexRoute>
        <Route path={basePath + 'all/:song_id'} components={ContainerPlaylist} ></Route>
        <Route path={basePath + ':playlist_id'} components={ContainerPlaylist} ></Route>
        <Route path={basePath + ':playlist_id/:song_id'} components={ContainerPlaylist} ></Route>
        <Route path={basePath + 'photos/'} components={ContainerPhoto} ></Route>
    </Route>
;

export default Routes;