import React from 'react';
import PropTypes from 'prop-types';
import Filter from './Filter';

const FilterList = ( {filterOptions, onFilterAdd, onFilterRemove} ) => (
	<div className="list-group">
		{filterOptions.map(opt =>
			<Filter
				key={opt.id}
				{...opt}
				onFilterAdd={onFilterAdd}
				onFilterRemove={onFilterRemove}
			/>
		)}
	</div>
);

FilterList.propTypes = {
	filterOptions: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.string.isRequired,
		value: PropTypes.string.isRequired,
		depth: PropTypes.number,
		children: PropTypes.array,
		checked: PropTypes.bool
	}).isRequired).isRequired,
	onFilterAdd: PropTypes.func.isRequired,
	onFilterRemove: PropTypes.func.isRequired
};

export default FilterList;