import styled from 'styled-components';

export const ListCards = styled.section.attrs({
	className: 'container'
})`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-gap: 3.2rem;
	margin-bottom: 4.8rem;
	margin-top: -80px;
`;
