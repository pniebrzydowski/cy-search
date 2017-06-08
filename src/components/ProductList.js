import React, { PropTypes } from 'react'
import ProductTile from './ProductTile'

const ProductList = ({ products, onProductClick }) => (
	<ul>
		{products.map(product =>
			<ProductTile
				key={product.id}
				{...product}
				onClick={() => onProductClick(product.id)}
			/>
		)}
	</ul>
)

imgSrc, title, text, onClick
ProductList.propTypes = {
	products: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number.isRequired,
		imgSrc: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired,
		text: PropTypes.string.isRequired,
		onProductClick: PropTypes.func.isRequired
	}).isRequired).isRequired
}

export default ProductList