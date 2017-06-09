import React, { PropTypes } from 'react'

const ProductTile = (product) => (
	<li>
		{product.id} : {product.title}
	</li>
);

ProductTile.propTypes = {
	id: PropTypes.number.isRequired,
	title: PropTypes.string.isRequired
};

export default ProductTile;
