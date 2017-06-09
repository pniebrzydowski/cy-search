import React from 'react';

const renderChildren = (nodes, onFilterSelect) => {
	if(!nodes || nodes.length === 0) return null;
	else {
		return (
			<ul>
				{nodes.map(node =>
					<Filter
						key={node.id}
						{...node}
						onFilterSelect={onFilterSelect}
					/>
				)}
			</ul>
		);
	}
};

const Filter = (filter, onFilterSelect) => (
	<li
		key={filter.id}
		onClick={e => {
			e.preventDefault();
			onFilterSelect(filter.id, filter.value)
		}}
	>
		{filter.value}

		{renderChildren(filter.children, onFilterSelect)}
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
	onFilterSelect: React.PropTypes.func.isRequired
};

export default (Filter);