import React from 'react'
import { connect } from 'react-redux'
import { doSearch, fetchProducts } from '../actions'

let SearchHeader = ({ dispatch }) => {
	let input;

	return (
		<div>
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
				<input ref={node => {
					input = node
				}} />
				<button type="submit">
					Search
				</button>
			</form>
		</div>
	)
}
SearchHeader = connect()(SearchHeader);

export default SearchHeader;