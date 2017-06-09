import React from 'react'
import { connect } from 'react-redux'
import { doSearch, fetchProducts } from '../actions'

let SearchHeader = ({ dispatch }) => {
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
					let url =
						'https://www.checkyeti.com/rest/v1/customer/products' +
						'?query=' + input.value;
					dispatch(doSearch(input.value));
					dispatch(fetchProducts(url));
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
SearchHeader = connect()(SearchHeader);

export default SearchHeader;