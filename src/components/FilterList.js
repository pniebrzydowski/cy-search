import React from 'react';
import Filter from './Filter';

const FilterList = ( {filterOptions, onFilterSelect} ) => (
	<ul>
		{filterOptions.map(opt =>
			<Filter
				key={opt.id}
				{...opt}
				onFilterSelect={onFilterSelect}
			/>
		)}
	</ul>
);

FilterList.propTypes = {
	filterOptions: React.PropTypes.arrayOf(React.PropTypes.shape({
		id: React.PropTypes.string.isRequired,
		isApplied: React.PropTypes.bool.isRequired
	}).isRequired).isRequired,
	onFilterSelect: React.PropTypes.func.isRequired
};

export default FilterList;