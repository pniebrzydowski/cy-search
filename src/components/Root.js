import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const Root = ({ store }) => (
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>
);

Root.propTypes = {
	store: PropTypes.object.isRequired,
};

export default Root;