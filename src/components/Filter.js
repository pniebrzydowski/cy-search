import React, { PropTypes } from 'react'

const Filter = ({ active, name, depth, onSelect}) => {

	if (active) {
		return <span>{children}</span>
	}

	return (
		<li class="depth {depth}">
			{}
			 onChange={e => {
				 e.preventDefault();
				 onSelect()
			 }}
		>
			{children}
		</li>
	)
};

Link.propTypes = {
	active: PropTypes.bool.isRequired,
	depth: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired
};

export default Filter;