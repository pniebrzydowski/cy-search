import React, { PropTypes } from 'react'

const ProductTile = (imgSrc, title, text, onClick) => (
	<li>
		<img src="{imgSrc}" alt="{title}" />
		<h2>{title}</h2>
		<p>{text}</p>
		<button onClick="{onClick}">Check Availability</button>
	</li>
);

Todo.propTypes = {
	onClick: PropTypes.func.isRequired,
	imgSrc: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired
};

export default ProductTile;
