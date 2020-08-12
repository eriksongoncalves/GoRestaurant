import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

	*{
		margin: 0;
		padding: 0;
		outline: 0;
		box-sizing: border-box;
	}

	html {
		font-size: 62.5%
	}

	body{
		font: 1.6rem 'Roboto', sans-serif;
		-webkit-font-smoothing: antialiased;
	}

	h1, h2, h3, h4, h5{
		font-family: 'Poppins', sans-serif;
		font-weight: 600;
	}

	h2{
		font-size: 3.6rem;
	}

	h3{
		font-size: 2.8rem;
	}

	h4{
		font-size: 2.4rem;
	}

	a{
		text-decoration: none;
	}

	ul{
		list-style: none;
	}

	textarea{
		resize: none;
	}

	button {
		background: ${props => props.theme.colors.greenDark};
		color: ${props => props.theme.colors.white};
		height: 56px;
		border: none;
		border-radius: 8px;
		display: flex;
		align-items: center;
		justify-content: center;
		font-family: 'Poppins';
		font-weight: 600;
		font-size: 1.6rem;
		cursor: pointer;

		p {
			padding: 20px;
			min-width: 138px;
		}

		div {
			display: flex;
			align-items: center;
			justify-content: center;
			width: 56px;
			height: 100%;
			background: ${props => props.theme.colors.greenLight};
			border-top-right-radius: 8px;
			border-bottom-right-radius: 8px;


			img{
				transition: all .5s;
			}
		}

		&:hover{

			div img{
				transform: rotate(360deg);
			}

		}
	}

	.container{
		width: 100%;
		max-width: 1120px;
		margin-left: auto;
		margin-right: auto;

		@media (max-width: 1120px) {
			padding-right: 1.5rem;
			padding-left: 1.5rem;
		}
	}
`;

export default GlobalStyle;
