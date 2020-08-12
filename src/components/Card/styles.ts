import styled, { css } from 'styled-components';

export const Container = styled.article`
	display: flex;
	flex-direction: column;
	background: ${props => props.theme.colors.bgCard};
	border-radius: 8px;
`;

export const CardHeader = styled.div<{ avaiable: boolean }>`
	height: 200px;
	background: ${props => props.theme.colors.secondary};
	border-top-left-radius: 8px;
	border-top-right-radius: 8px;
	display: flex;
	justify-content: center;
	align-items: flex-end;
	padding-right: 20px;
	padding-left: 20px;
	overflow: hidden;
	opacity: ${({ avaiable }) => (avaiable ? 1 : 0.5)};

	img {
		width: 100%;
		max-height: 178px;
		max-width: 272px;
		display: block;
		transition: all 0.5s;
	}

	&:hover {
		img {
			transform: scale(1.1);
		}
	}
`;

export const CardBody = styled.div`
	flex: 1;
	padding: 30px;
`;

export const CardTitle = styled.h3`
	color: ${props => props.theme.colors.title};
	margin-bottom: 1.6rem;
`;

export const CardDescription = styled.p`
	color: ${props => props.theme.colors.title};
	margin-bottom: 1.6rem;
`;

export const CardPrice = styled.h4`
	color: ${props => props.theme.colors.greenDark};
	font-family: 'Roboto', sans-serif;

	span {
		font-weight: normal;
	}
`;

export const CardFooter = styled.div`
	height: 80px;
	background: ${props => props.theme.colors.bgCardFooter};
	border-bottom-left-radius: 8px;
	border-bottom-right-radius: 8px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 30px;
`;

export const CardActions = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;

	a {
		display: block;
		background: ${props => props.theme.colors.white};
		display: flex;
		align-items: center;
		justify-content: center;
		width: 40px;
		height: 40px;
		border-radius: 8px;
		margin-right: 5px;
		cursor: pointer;

		&:last-child {
			margin-right: 0;
		}

		img {
			transition: transform 0.3s;
			transform: scale(0.9);
		}

		&:hover {
			img {
				transform: scale(1);
			}
		}
	}
`;

export const CardStatus = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	span {
		font-size: 1.2rem;
		color: ${props => props.theme.colors.title};
		margin-right: 1.2rem;
	}
`;

export const OnOff = styled.div<{ avaiable: boolean }>`
	width: 80px;
	height: 32px;
	background: ${({ avaiable, theme }) =>
		avaiable ? theme.colors.greenDark : theme.colors.primary};
	border-radius: 16px;
	position: relative;

	&:after {
		content: '';
		width: 40px;
		height: 20px;
		background: ${props => props.theme.colors.white};
		border-radius: 16px;
		position: absolute;
		top: 6px;

		${({ avaiable }) =>
			avaiable
				? css`
						right: 6px;
				  `
				: css`
						left: 6px;
				  `}
	}
`;
