import styled, { css } from 'styled-components';
import { Field, ErrorMessage } from 'formik';

export const Container = styled.div`
	margin-bottom: 24px;
`;

export const Label = styled.label`
	display: block;
	margin-bottom: 5px;
	font-size: 1.4rem;
	color: ${props => props.theme.colors.text};
`;

export const FormikField = styled(Field)`
	width: 100%;
	height: 56px;
	color: ${props => props.theme.colors.text};
	border-radius: 8px;
	border: none;
	padding: 24px;

	${props =>
		props.component &&
		props.component === 'textarea' &&
		css`
			height: 100px;
		`}

	&::placeholder {
		color: ${props => props.theme.colors.placeholder};
	}
`;

export const FormikErrorMessage = styled(ErrorMessage)`
	color: ${props => props.theme.colors.primary};
	font-size: 1.2rem;
`;
