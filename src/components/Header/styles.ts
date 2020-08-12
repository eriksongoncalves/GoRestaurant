import styled from 'styled-components';

export const HeaderContainer = styled.header`
	height: 281px;
	background: ${props => props.theme.colors.primary};
`;

export const Logo = styled.img``;

export const Container = styled.section.attrs({
	className: 'container'
})`
	padding-top: 45px;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
