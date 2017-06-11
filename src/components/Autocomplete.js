import React from 'react';
import PropTypes from 'prop-types';

const Autocomplete = ({terms}) => (
	<ul>
		{terms.map(term =>
			<li key={term}>{term}</li>
		)}
	</ul>
);

Autocomplete.propTypes = {
	terms: PropTypes.arrayOf(PropTypes.string)
};

export default (Autocomplete);