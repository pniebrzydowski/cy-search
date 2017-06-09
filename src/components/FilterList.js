import React from 'react';
import Filter from './Filter';

const FilterList = ( {filterOptions} ) => (
	<ul>
		{filterOptions.map(opt =>
			<Filter
				key={opt.key}
				{...opt}
			/>
		)}
	</ul>
);

FilterList.propTypes = {
	filterOptions: React.PropTypes.arrayOf(React.PropTypes.shape({
		key: React.PropTypes.string.isRequired,
		value: React.PropTypes.string.isRequired,
		isApplied: React.PropTypes.bool.isRequired
	}).isRequired).isRequired
};

export default FilterList;