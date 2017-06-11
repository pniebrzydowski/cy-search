import React from 'react'
import PropTypes from 'prop-types';

const ProductCard = (product) => (
	<div className="col-sm-6 col-md-4">
		<div className="thumbnail">
			<img src={product.coverPhoto} alt={product.title} />
			<div className="caption">
				<h3>{product.title}</h3>
				<p>{product.productType.value}</p>
				<p>
					{product.pricePerDay.price} {product.pricePerDay.currency} per day
					{product.pricePerHour ? ', '+product.pricePerHour.price+' '+product.pricePerHour.currency+' per hour' : ''}
				</p>
				<p><a href="#" className="btn btn-primary" role="button">Check Availability</a></p>
			</div>
		</div>
	</div>
);

ProductCard.propTypes = {
	title: PropTypes.string.isRequired,
	coverPhoto: PropTypes.string.isRequired,
	productType: PropTypes.object,
	pricePerDay: PropTypes.object,
	pricePerHour: PropTypes.object
};

export default ProductCard;
