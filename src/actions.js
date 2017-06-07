//action types
export const DO_SEARCH = 'DO_SEARCH';

//other constants


//action creators
export function doSearch(query) {
	return { type: DO_SEARCH, query }
}