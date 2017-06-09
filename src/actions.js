import fetch from 'isomorphic-fetch';

//action types
export const DO_SEARCH = 'DO_SEARCH';
export const REQUEST_PRODUCTS = 'REQUEST_PRODUCTS';
export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS';

//other constants


//action creators
export function doSearch(query) {
	return { type: DO_SEARCH, query };
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

export function fetchProducts(url) {
	return function (dispatch) {
		dispatch(requestProducts());
		return fetch(url, {
			method: 'GET'
		}).then(response => response.json())
			.then(json => dispatch(receiveProducts(json)))
	}
}