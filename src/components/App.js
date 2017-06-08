import React from 'react';
import SearchHeader from './SearchHeader';
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