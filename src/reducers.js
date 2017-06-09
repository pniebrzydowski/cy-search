import { combineReducers } from 'redux';
import { DO_SEARCH } from './actions';
import { DO_FILTER } from './actions';

function query(state = '', action) {
	switch(action.type) {
		case DO_SEARCH:
			return action.query;
		default:
			return state;
	}
}

function visibleProducts(state = [], action) {
	switch(action.type) {
		case DO_FILTER:
			return action.products;
		default:
			return state;
	}
}

const cySearchApp = combineReducers({
	query,
	visibleProducts
});

export default cySearchApp;