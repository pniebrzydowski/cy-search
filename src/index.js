import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import cySearchApp from './reducers';
import App from './components/App';

let store = createStore(cySearchApp);

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);