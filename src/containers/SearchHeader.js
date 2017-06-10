import React from 'react'
import { connect } from 'react-redux'
import { doSearch } from '../actions'

const SearchHeader = ({ dispatch }) => {
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
					dispatch(doSearch(input.value));

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
};

export default connect()(SearchHeader);