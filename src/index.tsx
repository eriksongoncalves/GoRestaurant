import React from 'react';
import ReactDOM from 'react-dom';

import Routes from './routes';
import Theme from './styles/Theme';

ReactDOM.render(
	<React.StrictMode>
		<Theme>
			<Routes />
		</Theme>
	</React.StrictMode>,
	document.getElementById('root')
);
