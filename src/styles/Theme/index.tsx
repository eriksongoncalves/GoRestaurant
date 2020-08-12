import React from 'react';
import { ThemeProvider } from 'styled-components';

import theme from './theme';
import GlobalStyle from './global';

const Theme: React.FC = ({ children }) => (
	<ThemeProvider theme={theme}>
		<GlobalStyle />
		{children}
	</ThemeProvider>
);

export default Theme;
