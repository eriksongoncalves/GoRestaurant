import styled from 'styled-components';
import { Form } from 'formik';

export const FormContainer = styled(Form)`
	button {
		float: right;
	}
`;

export const FormGroup = styled.div`
	display: flex;

	& div:first-child {
		flex: 1;
	}

	& div:last-child {
		width: 30%;
		margin-left: 15px;
	}
`;
