import React  from 'react'
import PropTypes from 'prop-types';
import ProductCard from './ProductCard'

const ProductList = ( {products, fetching, query} ) => (
	<div>
		{fetching &&
			<div className="panel panel-default">
				<p className="panel-body">Finding products...</p>
			</div>
		}
		{products.length === 0 && query !== '' && !fetching &&
		<div className="panel panel-default">
			<p className="panel-body">No products found.</p>
		</div>
		}
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
		id: PropTypes.number.isRequired,
		title: PropTypes.string.isRequired
	}).isRequired).isRequired,
	fetching: PropTypes.bool.isRequired,
	query: PropTypes.string.isRequired
};

export default ProductList