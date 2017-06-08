import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import cySearchApp from './reducers';
import App from './components/App';

let defaultState = {
	queries: [],
	products: []
};
let store = createStore(cySearchApp, defaultState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);