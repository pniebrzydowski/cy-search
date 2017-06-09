import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import { doSearch, fetchProducts } from '../actions'

const SearchHeader = ({ dispatch, history }) => {
	let input;

	return (
		<div className="container-fluid">
			<div className="row">
				<h1>SearchYeti</h1>
			</div>
			<div className="row">
				<form onSubmit={e => {
					e.preventDefault();
					if (!input.value.trim()) {
						return
					}
					let queryString = '?query=' + input.value;
					let url =
						'https://www.checkyeti.com/rest/v1/customer/products' + queryString;
					dispatch(doSearch(input.value));
					dispatch(fetchProducts(url));
					history.push(queryString);
					input.value = '';
				}}>
					<input className="form-control" ref={node => {
						input = node
					}} />
					<button className="form-control" type="submit">
						Search
					</button>
				</form>
			</div>
		</div>
	)
}

SearchHeader.propTypes = {
	history: React.PropTypes.shape({
		push: React.PropTypes.func.isRequired
	}).isRequired
};

export default withRouter(connect()(SearchHeader));