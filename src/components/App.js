import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { urlFetch, fetchProducts, fetchFilters } from '../actions'
import { withRouter } from 'react-router-dom';
import queryString  from 'query-string';
import SearchHeader from '../containers/SearchHeader';
import Products from '../containers/Products';
import Filters from '../containers/Filters';

class App extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.fetchFromUrl(this.props.history.location.search);
	}

	fetchFromUrl(urlQueryParams) {
		const { dispatch } = this.props;
		let params = queryString.parse(urlQueryParams);
		let query = '';
		let filters = [];

		for( let key in params) {
			if(key === 'query') {
				query = params[key];
			} else {
				let array = params[key].toString().split(',');
				for( let filter of array ) {
					filters.push({
						"key": key,
						"value": filter
					});
				}
			}
		}
		dispatch(fetchFilters(filters));
		dispatch(urlFetch({query: query, queryVal: query, filters: filters}));

		let url =
			'https://www.checkyeti.com/rest/v1/customer/products' + urlQueryParams;
		dispatch(fetchProducts(url));
	}

	componentDidUpdate(prevProps) {
		const { history, query } = this.props;

		if( this.props.location !== prevProps.location ) {
			let urlQueryParams = this.props.history.location.search;
			this.fetchFromUrl(urlQueryParams);
			return;
		}

		if(	this.props.query.query === prevProps.query.query &&
				this.props.query.filters === prevProps.query.filters) {
			return;
		}
		if(this.props.query.urlFetch) {
			return;
		}

		let queryString = '?';
		if(query.query !== '') {
			queryString += "query=" + query.query;
		}

		let filterString = [];
		for(let filter of query.filters) {
			if(query.query !== '') {
				filterString += "&"
			}
			filterString += filter.key + "=" + filter.value;
		}
		let urlQueryString = queryString + filterString;
		history.push(urlQueryString);
	}

	render () {
		return (
			<div className="App container-fluid">
				<div className="row">
					<SearchHeader />
				</div>
				<div className="row">
					<div className=" col-md-9 col-md-push-3 col-sm-8 col-sm-push-4 col-xs-12">
						<Products />
					</div>
					<div className="col-md-3 col-md-pull-9 col-sm-4 col-sm-pull-8 col-xs-12">
						<Filters />
					</div>
				</div>
			</div>
		);
	}
}

App.propTypes = {
	dispatch: PropTypes.func.isRequired,
	history: PropTypes.shape({
		push: PropTypes.func.isRequired
	}).isRequired
};

function mapStateToProps(state) {
	const { query } = state;

	return { query };
}

export default withRouter(connect(mapStateToProps)(App));