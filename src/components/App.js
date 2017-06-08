import React from 'react';
import SearchHeader from '../containers/SearchHeader';
import Products from '../containers/Products';
import Filters from '../containers/FilterList';

//<Filters />

const App = () => (
  <div className="App">
		<SearchHeader />
		<Products />
  </div>
)

export default App;