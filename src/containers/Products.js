import { connect } from 'react-redux'
import ProductList from '../components/ProductList'

const getVisibleProducts = (products) => {
	for(let i=0; i<products.items.length; i++) {
		let p = products.items[i];
		if(p.pricePerDay) {
			p.pricePerDay.price = Math.round(p.pricePerDay.price * 100) / 100;
		}
		if(p.pricePerHour) {
			p.pricePerHour.price = Math.round(p.pricePerDay.price * 100) / 100;
		}
	}
	return products.items;
};

const mapStateToProps = (state) => {
	return {
		products: getVisibleProducts(state.products)
	}
};

/*const mapDispatchToProps = (dispatch) => {
	return {
		onProductClick: (id) => {
			dispatch(??(id))
		}
	}
}*/

const Products = connect(
	mapStateToProps,
//	mapDispatchToProps
)(ProductList);

export default Products