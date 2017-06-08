import React, { PropTypes } from 'react'
import ProductTile from './ProductTile'

/*{queries.map(query =>
	<ProductTile
		key={query.id}
		{...query}
	/>
)}*/
const ProductList = ({ query }) => (
	<ul>
		<li>{query}</li>
	</ul>
);

ProductList.propTypes = {
	query: PropTypes.string.isRequired
};

export default ProductList