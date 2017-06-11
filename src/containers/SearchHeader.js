import React from 'react'
import { connect } from 'react-redux'
import { doSearch } from '../actions'

const SearchHeader = ({ dispatch, query }) => {
	let input;

	let updateQueryVal = (e) => {
		let newVal = e.target.value;
		query = newVal;
	};

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
								<input type="text" className="form-control" onChange={updateQueryVal}
											 value={query} ref={node => {input = node;}} />
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
		query: state.query.query || ''
	}
};

export default connect(mapStateToProps)(SearchHeader);