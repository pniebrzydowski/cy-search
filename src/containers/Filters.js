import { connect } from 'react-redux'
import { addFilter, removeFilter } from '../actions';
import FilterList from '../components/FilterList'

const getFilterOptions = (filterOptions, query) => {
	let updateItems = (items) => {
		for(let opt of items) {
			opt.id = opt.key;

			if(opt.depth && opt.depth > 0) {
				if(opt.children) {
					updateItems(opt.children);
				}
				continue;
			}
		}
	};

	updateItems(filterOptions.items);
	return filterOptions.items;
};

const mapStateToProps = (state) => {
	return {
		filterOptions: getFilterOptions(state.filterOptions, state.query)
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		onFilterAdd: (filter) => {
			dispatch(addFilter(filter));
		},
		onFilterRemove: (filter) => {
			dispatch(removeFilter(filter));
		}
	}
};

const Filters = connect(
	mapStateToProps,
	mapDispatchToProps
)(FilterList);

export default Filters;