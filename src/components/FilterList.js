import React from 'react';
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
	filterOptions: React.PropTypes.arrayOf(React.PropTypes.shape({
		id: React.PropTypes.string.isRequired,
		value: React.PropTypes.string.isRequired,
		depth: React.PropTypes.number,
		children: React.PropTypes.array,
		checked: React.PropTypes.bool
	}).isRequired).isRequired,
	onFilterAdd: React.PropTypes.func.isRequired,
	onFilterRemove: React.PropTypes.func.isRequired
};

export default FilterList;