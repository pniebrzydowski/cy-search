import React from 'react'
import { connect } from 'react-redux'
import { doSearch, adjustQuery, fetchTerms, receiveTerms } from '../actions'
import Autocomplete from '../components/Autocomplete';

const SearchHeader = ({ queryVal, terms, submitSearch, updateQueryVal, clearSearch, onTermClick }) => {
	let input;

	return (
		<div className="page-header">
			<div className="container-fluid">
				<div className="row">
					<form className="form-horizontal"
								onSubmit={e => {submitSearch(e,input)}}>
						<div className="form-group form-group-lg container-fluid">
							<div className="row">
								<label className="control-label col-md-3 col-sm-4 col-xs-12">SearchYeti</label>
								<div className="col-md-6 col-sm-5 col-xs12">
									<div className="input-group">
										<input type="text" className="form-control"
													 value={queryVal} ref={node => {input = node;}}
													 onChange={updateQueryVal}/>
										<span className="input-group-btn">
											<button className="btn btn-default btn-lg" type="button" onClick={clearSearch}>Clear</button>
										</span>
									</div>
								</div>
								<div className="col-md-2 col-sm-2 col-xs-12">
									<button type="submit" className="btn btn-primary btn-lg form-control">
										Search
									</button>
								</div>
							</div>
							<div className="row">
								<div className="control-label col-md-3 col-sm-4 col-xs-12"></div>
								<div className="col-md-6 col-sm-5 col-xs-12">
									<Autocomplete terms={terms} onTermClick={onTermClick} />
								</div>
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
		queryVal: state.query.queryVal,
		terms: state.query.terms
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		submitSearch: (e, input) => {
			e.preventDefault();
			if (!input.value.trim()) {
				return
			}
			dispatch(doSearch(input.value));
		},
		updateQueryVal: (e) => {
			let newVal = e.target.value;
			dispatch(adjustQuery(newVal));
			dispatch(fetchTerms(newVal));
		},
		clearSearch: (e) => {
			dispatch(adjustQuery(''));
			dispatch(receiveTerms([]));
		},
		onTermClick: (term) => {
			dispatch(doSearch(term));
		}
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchHeader);