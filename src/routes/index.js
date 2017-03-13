import React from 'react';
import { Router, Route, IndexRoute, browserHistory, hashHistory } from 'react-router';

import App from './../components/App';
import ContainerPlaylist from './../containers/ContainerPlaylist';
import ContainerPlaylistPopup from './../containers/ContainerPlaylistPopup';
import ContainerPlayer from './../containers/ContainerPlayer';

const basePath = typeof _basePath !== 'undefined' ? _basePath : '/';

const Routes = (
    <Route component={App}>
        <Route path="/" component={ContainerPlaylist} />
        <Route path="/a" components={()=>(<div>
            <ContainerPlaylist />
            <ContainerPlaylistPopup />
            <ContainerPlayer />
            </div>
        )} >
        </Route>
    </Route>
);

export default Routes;