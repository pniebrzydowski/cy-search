import React, { PropTypes } from 'react'
import ProductCard from './ProductCard'


const ProductList = ( {products} ) => (
	<ul>
		{products.map(product =>
		 <ProductCard
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