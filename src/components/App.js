import React, {Component} from 'react';
import { connect } from 'react-redux'
import { fetchProducts, fetchFilters } from '../actions'
import { withRouter } from 'react-router-dom';
import SearchHeader from '../containers/SearchHeader';
import Products from '../containers/Products';
import Filters from '../containers/Filters';

class App extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		const { dispatch } = this.props;
		let url =
			'https://www.checkyeti.com/rest/v1/customer/products';
		dispatch(fetchProducts(url));
		dispatch(fetchFilters());
	}

	componentDidUpdate(prevProps) {
		if(this.props.query !== prevProps.query) {
			const { dispatch, history, query } = this.props;
			let queryString = '?';
			queryString += "query=" + query.query;

			let filterString = [];
			for(let filter of query.filters) {
				if(query.query != '') {
					filterString += "&"
				}
				filterString += filter.key + "=" + filter.value;
			}
			let url =
				'https://www.checkyeti.com/rest/v1/customer/products' + queryString + filterString;
			dispatch(fetchProducts(url));
			history.push(queryString + filterString);
		}
	}

	render () {
		return (
			<div className="App container-fluid">
				<div className="row">
					<SearchHeader />
				</div>
				<div className="row">
					<div className="col-md-3 col-sm-4">
						<Filters />
					</div>
					<div className="col-md-9 col-sm-8">
						<Products />
					</div>
				</div>
			</div>
		);
	}
}

App.propTypes = {
	dispatch: React.PropTypes.func.isRequired,
	history: React.PropTypes.shape({
		push: React.PropTypes.func.isRequired
	}).isRequired
};

function mapStateToProps(state) {
	const { query } = state;

	return { query };
}

export default withRouter(connect(mapStateToProps)(App));