import { connect } from 'react-redux'
import { setFilter } from '../actions'
import Filter from '../components/Filter';

const mapStateToProps = (state, ownProps) => {
	return {
		active: ownProps.filter === state.visibilityFilter
	}
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		onClick: () => {
			dispatch(setVisibilityFilter(ownProps.filter))
		}
	}
};

const FilterList = connect(
	mapStateToProps,
	mapDispatchToProps
)(Filter);

export default FilterList