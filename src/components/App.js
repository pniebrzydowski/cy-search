import React from 'react';
import SearchHeader from '../containers/SearchHeader';
import Products from '../containers/Products';
import Filters from '../containers/FilterList';

//<Filters />

const App = () => (
  <div className="App container-fluid">
		<div className="row">
			<SearchHeader />
		</div>
		<div className="row">
			<Products />
		</div>
  </div>
)

export default App;