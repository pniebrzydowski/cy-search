import { combineReducers } from 'redux';
import { DO_SEARCH } from './actions';

function search(state = [], action) {
	switch(action.type) {
		case DO_SEARCH:
			return {
				query: action.query
			};
		default:
			return state;
	}
}

const cySearchApp = combineReducers({
	search
});

export default cySearchApp;