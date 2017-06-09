import React from 'react';
import { connect } from 'react-redux';

const Filter = ({ filter, onFilter}) => {
	return (
		<li
			className={'depth-'+filter.depth}
			onClick={e => {
				e.preventDefault();
				onFilter(filter.key, filter.value)
			}}
		>
			{filter.value}
			/*{
				filter.children &&
					filter.children.map(child =>
						<Filter
							key={child.key}
							onFilter={onFilter}
							{...child}
						/>
					)
			}*/
		</li>
	)
};

Filter.propTypes = {
	key: React.PropTypes.string.isRequired,
	value: React.PropTypes.string.isRequired,
	depth: React.PropTypes.number,
	children: React.PropTypes.arrayOf(React.PropTypes.shape({
		key: React.PropTypes.string.isRequired,
		value: React.PropTypes.string.isRequired
	})),
	onFilter: React.PropTypes.func.isRequired
};

export default connect()(Filter);