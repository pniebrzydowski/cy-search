import fetch from 'isomorphic-fetch';

//action types
export const DO_SEARCH = 'DO_SEARCH';
export const ADD_FILTER = 'ADD_FILTER';
export const REMOVE_FILTER = 'REMOVE_FILTER';
export const REQUEST_FILTERS = 'REQUEST_FILTERS';
export const RECEIVE_FILTERS = 'RECEIVE_FILTERS';
export const REQUEST_PRODUCTS = 'REQUEST_PRODUCTS';
export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS';

//other constants
export function fetchFilters() {
	return function (dispatch) {
		let url = 'https://www.checkyeti.com/rest/v1/customer/product-filters';
		dispatch(requestFilters());
		return fetch(url, {
			method: 'GET'
		}).then(response => response.json())
			.then(json => dispatch(receiveFilters(json)));
	}
}

export function fetchProducts(url) {
	return function (dispatch) {
		dispatch(requestProducts());
		return fetch(url, {
			method: 'GET'
		}).then(response => response.json())
			.then(json => dispatch(receiveProducts(json)));
	}
}


//action creators
export function doSearch(query) {
	return { type: DO_SEARCH, query };
}

export function addFilter(filter) {
	return { type: ADD_FILTER, filter };
}

export function removeFilter(filter) {
	return { type: REMOVE_FILTER, filter };
}

export function requestFilters() {
	return {type: REQUEST_FILTERS};
}

export function receiveFilters(json) {
	return {
		type: RECEIVE_FILTERS,
		filterOptions: json,
		receivedAt: Date.now()
	}
}

export function requestProducts() {
	return {type: REQUEST_PRODUCTS};
}

export function receiveProducts(json) {
	return {
		type: RECEIVE_PRODUCTS,
		products: json,
		receivedAt: Date.now()
	}
}