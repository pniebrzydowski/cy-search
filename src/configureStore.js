import thunkMiddleware from 'redux-thunk';
import {createStore, applyMiddleware, compose} from 'redux';
import cySearchApp from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore() {
	return createStore(
		cySearchApp,
		composeEnhancers(
			applyMiddleware(thunkMiddleware)
		)
	);
}