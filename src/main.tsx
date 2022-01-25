import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import '@fortawesome/fontawesome-free/css/all.min.css';
import './index.css';
import './dist/styles.css';

import GesinApp from './GesinApp';

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<GesinApp />
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root')
);
