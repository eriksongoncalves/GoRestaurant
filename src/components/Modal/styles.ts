import styled from 'styled-components';

export const Container = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: flex;
	background: rgba(18, 18, 20, 0.8);
	justify-content: center;
	align-items: center;
`;

export const ModalContainer = styled.div`
	background: ${props => props.theme.colors.bgCard};
	padding: 50px 40px;
	width: 100%;
	max-width: 730px;
	border-radius: 8px;
	position: relative;
`;

export const ModalTitle = styled.h2`
	margin-bottom: 4rem;
`;

export const CloseButton = styled.a`
	position: absolute;
	top: 50px;
	right: 40px;
	font-size: 3rem;
	color: ${props => props.theme.colors.text};
	font-family: 'Poppins', sans-serif;
	cursor: pointer;
`;

export const ModalBody = styled.div``;
