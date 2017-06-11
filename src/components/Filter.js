import React from 'react';
import PropTypes from 'prop-types';

const renderNodes = (item, tree, onFilterAdd, onFilterRemove) => {
	let nodes = item.children;
	if(!nodes || nodes.length === 0) return null;

	let selectFilter = (e, node) => {
		let opt = {
			...node,
			checked: !node.checked
		};
		e.stopPropagation();
		if(!node.checked) {
			onFilterAdd({key: tree[0], value: node.id, tree: tree.concat(node.id), opt: opt});
		} else {
			onFilterRemove({key: tree[0], value: node.id, tree: tree.concat(node.id), opt: opt});
		}
	};

	if(item.depth > 1) {
		return (
			<div>
				{nodes.map(node =>
					<div key={node.id}>
						<h4>{node.value}</h4>

						{renderNodes(node, tree.concat(node.id), onFilterAdd, onFilterRemove)}
					</div>
				)}
			</div>
		)
	}

	if(item.depth === 1) {
		return (
			<div>
				{nodes.map(node =>
					<div key={node.id} className="checkbox">
						<label>
							<input type="checkbox"
										 onChange={e => selectFilter(e,node)}
										 checked={node.checked} />
							{node.value}
						</label>
					</div>
				)}
			</div>
		)
	}
};

const Filter = (filter, onFilterAdd, onFilterRemove) => (
	<div className="list-group-item" key={filter.id}>
		<h3>{filter.value}</h3>

		{renderNodes(filter, [filter.id], filter.onFilterAdd, filter.onFilterRemove)}
	</div>
);

Filter.propTypes = {
	id: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	depth: PropTypes.number,
	children: PropTypes.array,
	checked: PropTypes.bool,
	onFilterAdd: PropTypes.func.isRequired,
	onFilterRemove: PropTypes.func.isRequired
};

export default (Filter);