import React, { PropTypes } from 'react'
import ProductTile from './ProductTile'


const ProductList = ( {queries} ) => (
	<ul>
		{queries.map(query =>
		 <ProductTile
			 key={query.query}
			 {...query}
		 />
		 )}
	</ul>
);

ProductList.propTypes = {
	queries: PropTypes.arrayOf(PropTypes.shape({
		query: PropTypes.string.isRequired
	}).isRequired).isRequired
};

export default ProductList