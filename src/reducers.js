import { combineReducers } from 'redux';
import {
	DO_SEARCH, REQUEST_PRODUCTS, RECEIVE_PRODUCTS
} from './actions';

function query(state = '', action) {
	switch(action.type) {
		case DO_SEARCH:
			return action.query;
		default:
			return state;
	}
}

function products(state = {
	isFetching: false,
	didInvalidate: false,
	items: []
}, action) {
	switch (action.type) {
		case REQUEST_PRODUCTS:
			return Object.assign({}, state, {
				isFetching: true,
				didInvalidate: false
			})
		case RECEIVE_PRODUCTS:
			return Object.assign({}, state, {
				isFetching: false,
				didInvalidate: false,
				items: action.products,
				lastUpdated: action.receivedAt
			})
		default:
			return state;
	}
}

const cySearchApp = combineReducers({
	query,
	products
});

export default cySearchApp;