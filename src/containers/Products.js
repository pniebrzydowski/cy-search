import { connect } from 'react-redux'
import ProductList from '../components/ProductList'

const getVisibleProducts = (queries) => {
	return queries;
	let query = '', products = [];
	switch (query) {
		//return products.filter(t => t.??);
		default:
			return products;
	}
}

const mapStateToProps = (state) => {
	return {
		queries: getVisibleProducts(state.queries)
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