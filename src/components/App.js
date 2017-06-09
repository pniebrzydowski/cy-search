import React from 'react';
import SearchHeader from '../containers/SearchHeader';
import Products from '../containers/Products';
import Filters from '../containers/Filters';

//<Filters />

const App = () => (
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
)

export default App;