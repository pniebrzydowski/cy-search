import React, { PropTypes } from 'react'
import ProductTile from './ProductTile'


const ProductList = ( {products} ) => (
	<ul>
		{products.map(product =>
		 <ProductTile
			 key={product.id}
			 {...product}
		 />
		 )}
	</ul>
);

ProductList.propTypes = {
	products: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number.required,
		title: PropTypes.string.required
	}).isRequired).isRequired
};

export default ProductList