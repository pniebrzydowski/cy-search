import { connect } from 'react-redux'
import ProductList from '../components/ProductList'

const getVisibleProducts = (products) => {
	return products.items;
}

const mapStateToProps = (state) => {
	return {
		products: getVisibleProducts(state.products)
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