import React, { PropTypes } from 'react'
import ProductCard from './ProductCard'


const ProductList = ( {products} ) => (
	<div>
		{products.map(product =>
		 <ProductCard
			 key={product.id}
			 {...product}
		 />
		 )}
	</div>
);

ProductList.propTypes = {
	products: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number.required,
		title: PropTypes.string.required
	}).isRequired).isRequired
};

export default ProductList