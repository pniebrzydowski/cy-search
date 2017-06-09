import { connect } from 'react-redux'
import { addFilter, removeFilter } from '../actions';
import FilterList from '../components/FilterList'

const getFilterOptions = (filterOptions) => {
	for(let opt of filterOptions.items) {
		opt.id = opt.key;
		opt.isApplied = false;
	}
	return filterOptions.items;
};

const mapStateToProps = (state) => {
	return {
		filterOptions: getFilterOptions(state.filterOptions)
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		onFilterSelect: (filter) => {
			if(filter.isApplied) {
				dispatch(removeFilter(filter));
			} else {
				dispatch(addFilter(filter));
			}
		}
	}
};

const Filters = connect(
	mapStateToProps,
	mapDispatchToProps
)(FilterList);

export default Filters;