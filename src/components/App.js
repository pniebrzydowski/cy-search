import React from 'react';
import SearchHeader from './SearchHeader';
import Products from '../containers/Products';
import Filters from '../containers/Filters';

const App = () => (
  <div className="App">
		<SearchHeader />
		<Filters />
		<Products />
  </div>
)

export default App;