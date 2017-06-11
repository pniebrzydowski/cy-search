import React from 'react';

const renderNodes = (item, tree, onFilterAdd, onFilterRemove) => {
	let nodes = item.children;
	if(!nodes || nodes.length === 0) return null;

	if(item.depth > 1) {
		return (
			<ul>
				{nodes.map(node =>
					<li className="filter-subcategory" key={node.id}>
						{node.value}

						{renderNodes(node, tree.concat(node.id), onFilterAdd, onFilterRemove)}
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
							let opt = {
								...node,
								checked: !node.checked
							};
							e.preventDefault();
							e.stopPropagation();
							if(!node.checked) {
								onFilterAdd({key: tree[0], value: node.id, tree: tree.concat(node.id), opt: opt});
							} else {
								onFilterRemove({key: tree[0], value: node.id, tree: tree.concat(node.id), opt: opt});
							}
						}}
					>
						<input type="checkbox" name="filter" checked={node.checked} value={node.id} />
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

		{renderNodes(filter, [filter.id], filter.onFilterAdd, filter.onFilterRemove)}
	</li>
);

Filter.propTypes = {
	id: React.PropTypes.string.isRequired,
	value: React.PropTypes.string.isRequired,
	depth: React.PropTypes.number,
	children: React.PropTypes.array,
	checked: React.PropTypes.bool,
	onFilterAdd: React.PropTypes.func.isRequired,
	onFilterRemove: React.PropTypes.func.isRequired
};

export default (Filter);