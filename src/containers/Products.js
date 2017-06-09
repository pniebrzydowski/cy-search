import { connect } from 'react-redux'
import ProductList from '../components/ProductList'

const getVisibleProducts = (products,query) => {
	switch (query) {
		//return products.filter(t => t.??);
		default:
			return [
				{id:1,title:'Product'}
			];
	}
}

const mapStateToProps = (state) => {
	return {
		products: getVisibleProducts(state.products,state.query)
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