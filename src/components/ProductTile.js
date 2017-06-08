import React, { PropTypes } from 'react'

const ProductTile = (query) => (
	<li>
		{query}
	</li>
);

ProductTile.propTypes = {
	query: PropTypes.string.isRequired
};

export default ProductTile;
