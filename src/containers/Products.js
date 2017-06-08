import { connect } from 'react-redux'
import ProductList from '../components/ProductList'

const getVisibleProducts = (products, filter) => {
	switch (products) {
		//return products.filter(t => t.??);
		default:
			return products;
	}
}

const mapStateToProps = (state) => {
	return {
		products: getVisibleProducts(state.products, state.visibilityFilter)
	}
}

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
)(ProductList)

export default Products