import { combineReducers } from 'redux';
import {
	DO_SEARCH, ADD_FILTER, REMOVE_FILTER, REQUEST_FILTERS, RECEIVE_FILTERS, REQUEST_PRODUCTS, RECEIVE_PRODUCTS
} from './actions';

function query(state = {
	query: '',
	filters: []
}, action) {
	switch(action.type) {
		case DO_SEARCH:
			return Object.assign({}, state, {
				query: action.query,
			});
		case ADD_FILTER:
			return Object.assign({}, state.filters, [
				...state.filters,
				{
					key: action.filter.key,
					value: action.filter.value
				}
			]);
		case REMOVE_FILTER:
			return state;
		default:
			return state;
	}
}

function filterOptions(state = {
	isFetching: false,
	fetched: false,
	items: []
}, action) {
	switch (action.type) {
		case REQUEST_FILTERS:
			return Object.assign({}, state, {
				isFetching: true,
			});
		case RECEIVE_FILTERS:
			return Object.assign({}, state, {
				isFetching: false,
				fetched: true,
				items: action.filterOptions,
				lastUpdated: action.receivedAt
			});
		default:
			return state;
	}
}

function products(state = {
	isFetching: false,
	items: []
}, action) {
	switch (action.type) {
		case REQUEST_PRODUCTS:
			return Object.assign({}, state, {
				isFetching: true,
			});
		case RECEIVE_PRODUCTS:
			return Object.assign({}, state, {
				isFetching: false,
				items: action.products,
				lastUpdated: action.receivedAt
			});
		default:
			return state;
	}
}

const cySearchApp = combineReducers({
	query,
	filterOptions,
	products
});

export default cySearchApp;