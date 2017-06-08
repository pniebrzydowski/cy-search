import { connect } from 'react-redux'
import ProductList from '../components/ProductList'

const getVisibleProducts = (query) => {
	switch (query) {
		//return products.filter(t => t.??);
		default:
			return query;
	}
}

const mapStateToProps = (state) => {
	return {
		products: getVisibleProducts(state.query)
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