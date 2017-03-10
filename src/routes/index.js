import React from 'react';
import { Route, IndexRoute} from 'react-router';

import App from './../components/App';
import ContainerSearch from './../containers/ContainerSearch';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={ContainerSearch} />
    </Route>
);
