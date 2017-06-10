import React from 'react';

const renderNodes = (item, category, onFilterAdd, onFilterRemove) => {
	let nodes = item.children;
	if(!nodes || nodes.length === 0) return null;

	if(item.depth > 1) {
		return (
			<ul>
				{nodes.map(node =>
					<li className="filter-subcategory" key={node.id}>
						{node.value}

						{renderNodes(node, category, onFilterAdd, onFilterRemove)}
					</li>
				)}
			</ul>
		)
	}

	if(item.depth === 1) {
		return (
			<ul>
				{nodes.map(node =>
					<li
						key={node.id}
						onClick={e => {
							e.preventDefault();
							e.stopPropagation();
							if(!node.isApplied) {
								onFilterAdd({key: category, value: node.id});
							} else {
								onFilterRemove({key: category, value: node.id});
							}
						}}
					>
						{node.value}
					</li>
				)}
			</ul>
		)
	}
};

const Filter = (filter, onFilterAdd, onFilterRemove) => (
	<li className="filter-category"	key={filter.id}>
		{filter.value}

		{renderNodes(filter, filter.id, filter.onFilterAdd, filter.onFilterRemove)}
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
	isApplied: React.PropTypes.bool,
	onFilterAdd: React.PropTypes.func.isRequired,
	onFilterRemove: React.PropTypes.func.isRequired
};

export default (Filter);