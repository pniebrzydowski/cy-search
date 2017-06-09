//action types
export const DO_SEARCH = 'DO_SEARCH';
export const DO_FILTER = 'DO_FILTER';

//other constants


//action creators
export function doSearch(query) {
	return { type: DO_SEARCH, query };
}

export function doFilter(filter) {
	return { type: DO_FILTER, filter };
}