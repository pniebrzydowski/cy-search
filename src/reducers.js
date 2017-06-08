import { combineReducers } from 'redux';
import { DO_SEARCH } from './actions';

function queries(state = [], action) {
	switch(action.type) {
		case DO_SEARCH:
			return [
				...state,
				{
					query: action.query
				}
			];
		default:
			return state;
	}
}

const cySearchApp = combineReducers({
	queries
});

export default cySearchApp;