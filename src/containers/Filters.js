import { connect } from 'react-redux'
import { addFilter, removeFilter } from '../actions';
import FilterList from '../components/FilterList'

const getFilterOptions = (filterOptions) => {
	let updateItems = (items) => {
		for(let opt of items) {
			opt.id = opt.key;
			opt.isApplied = false;

			if(opt.children) {
				updateItems(opt.children);
			}
		}
	};

	updateItems(filterOptions.items);
	return filterOptions.items;
};

const mapStateToProps = (state) => {
	return {
		filterOptions: getFilterOptions(state.filterOptions)
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