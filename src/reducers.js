import { combineReducers } from 'redux';
//import {} from './actions';

function search(state = [], action) {
	switch(action.type) {
		case DO_SEARCH:
			return action.query;
		default:
			return state;
	}
}
const cySearchApp = combineReducers({
	search
});

export default cySearchApp;