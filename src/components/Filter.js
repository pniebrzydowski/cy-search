import React from 'react';

const renderChildren = (nodes, onFilterAdd, onFilterRemove) => {
	if(!nodes || nodes.length === 0) return null;
	else {
		return (
			<ul>
				{nodes.map(node =>
					<Filter
						key={node.id}
						{...node}
						onFilterAdd={onFilterAdd}
						onFilterRemove={onFilterRemove}
					/>
				)}
			</ul>
		);
	}
};

const Filter = (filter, onFilterAdd, onFilterRemove) => (
	<li
		key={filter.id}
		onClick={e => {
			e.preventDefault();
			e.stopPropagation();
			if(!filter.isApplied) {
				filter.onFilterAdd(filter);
			} else {
				filter.onFilterRemove(filter);
			}
		}}
	>
		{filter.value}

		{renderChildren(filter.children, filter.onFilterAdd, filter.onFilterRemove)}
	</li>
);

Filter.propTypes = {
	id: React.PropTypes.string.isRequired,
	value: React.PropTypes.string.isRequired,
	depth: React.PropTypes.number,
	children: React.PropTypes.arrayOf(React.PropTypes.shape({
		id: React.PropTypes.string.isRequired,
		value: React.PropTypes.string.isRequired
	})),
	isApplied: React.PropTypes.bool.isRequired,
	onFilterAdd: React.PropTypes.func.isRequired,
	onFilterRemove: React.PropTypes.func.isRequired
};

export default (Filter);