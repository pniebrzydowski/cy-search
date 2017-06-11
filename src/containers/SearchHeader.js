import React from 'react'
import { connect } from 'react-redux'
import { doSearch, adjustQuery } from '../actions'

const SearchHeader = ({ dispatch, queryVal }) => {
	let input;

	return (
		<div className="page-header">
			<div className="container-fluid">
				<div className="row">
					<form className="form-horizontal"
								onSubmit={e => {
						e.preventDefault();
						if (!input.value.trim()) {
							return
						}
						dispatch(doSearch(input.value));
					}}>
						<div className="form-group form-group-lg container-fluid">
							<label className="control-label col-md-3 col-sm-4 col-xs-12">SearchYeti</label>
							<div className="col-md-6 col-sm-5 col-xs12">
								<input type="text" className="form-control"
											 value={queryVal} ref={node => {input = node;}}
											 onChange={e => {
												 let newVal = e.target.value;
												 dispatch(adjustQuery(newVal));
											}}/>
							</div>
							<div className="col-md-2 col-sm-2 col-xs-12">
								<button type="submit" className="btn btn-primary btn-lg form-control">
									Search
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
};

const mapStateToProps = (state) => {
	return {
		queryVal: state.query.queryVal || ''
	}
};

export default connect(mapStateToProps)(SearchHeader);