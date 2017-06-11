import React from 'react';
import PropTypes from 'prop-types';

const Autocomplete = ({terms, onTermClick}) => (
	<div className="list-group" style={{position: 'absolute', zIndex: '100'}}>
		{terms.map(term =>
			<a key={term} className="list-group-item" style={{cursor: 'pointer'}}
				 onClick={e => onTermClick(term)}>
				{term}
			</a>
		)}
	</div>
);

Autocomplete.propTypes = {
	terms: PropTypes.arrayOf(PropTypes.string).isRequired,
	onTermClick: PropTypes.func.isRequired
};

export default (Autocomplete);