import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import reducer from './reducers';

const firstState = {
	list: [{
		id: 0,
		username: 'NGUYEN VAN A',
		email: 'hoangvu@gmail.com'
	},
	{
		id: 1,
		username: 'NGUYEN VAN B',
		email: 'hoangvu@gmail.com'
	},
	{
		id: 2,
		username: 'NGUYEN VAN C',
		email: 'hoangvu@gmail.com'
	}]
};

const store = createStore(reducer, firstState);

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
