import { combineReducers } from 'redux';
import {
	URL_FETCH, DO_SEARCH, ADD_FILTER, REMOVE_FILTER, REQUEST_FILTERS, RECEIVE_FILTERS, REQUEST_PRODUCTS, RECEIVE_PRODUCTS
} from './actions';

function query(state = {
	urlFetch: false,
	query: '',
	filters: []
}, action) {
	switch(action.type) {
		case URL_FETCH:
			return {
				...state,
				urlFetch: true,
				query: action.initState.query,
				filters: action.initState.filters
			};
		case DO_SEARCH:
			return {
				...state,
				urlFetch: false,
				query: action.query
			};
		case ADD_FILTER:
			return {
				...state,
				urlFetch: false,
				filters: [
					...state.filters,
					{
						key: action.filter.key,
						value: action.filter.value
					}
				]
			};
		case REMOVE_FILTER:
			let index = state.filters.findIndex((filter) => {
				return filter.value === action.filter.value;
			});
			return {
				...state,
				filters: [
					...state.filters.slice(0, index),
					...state.filters.slice(index + 1)
				]
			};
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
		case ADD_FILTER:
		case REMOVE_FILTER:
			let updateObject = function(object, tree, opt) {
				if(!object.children || tree.length === 0) {
					return {
						...object,
						...opt
					};
				}
				const [curCat, ...restCats] = tree;

				return {
					...object,
					children: object.children.map((child) => {
						if (!restCats.includes(child.key)) return child;

						return updateObject(child, restCats, opt)
					})
				}
			};

			return {
				...state,
				items: state.items.map((option) => {
					return updateObject(option, action.filter.tree, action.filter.opt)
				})
			};
		case REQUEST_FILTERS:
			return {
				...state,
				isFetching: true
			};
		case RECEIVE_FILTERS:
			return {
				...state,
				isFetching: false,
				fetched: true,
				items: action.filterOptions,
				lastUpdated: action.receivedAt
			};
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
			return {
				...state,
				isFetching: true
			};
		case RECEIVE_PRODUCTS:
			return {
				...state,
				isFetching: false,
				items: action.products,
				lastUpdated: action.receivedAt
			};
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