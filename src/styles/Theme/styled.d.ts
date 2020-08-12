import 'styled-components';

declare module 'styled-components' {
	export interface DefaultTheme {
		colors: {
			primary: string;
			secondary: string;
			bgCard: string;
			bgCardFooter: string;
			title: string;
			text: string;
			greenDark: string;
			greenLight: string;
			white: string;
			placeholder: string;
		};
	}
}
