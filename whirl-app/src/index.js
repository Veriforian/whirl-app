import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import './sass/main.scss';

import App from './components/App';
import reducers from './reducers';

const store = createStore(
	reducers,
	{},
	composeWithDevTools(applyMiddleware(reduxThunk))
);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
