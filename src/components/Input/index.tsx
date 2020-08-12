import React from 'react';
import { FieldAttributes } from 'formik';

import { Container, Label, FormikField, FormikErrorMessage } from './styles';

interface InputProps extends FieldAttributes<any> {
	name: string;
	labelText: string;
}

const Input: React.FC<InputProps> = ({ name, labelText, ...rest }) => {
	return (
		<Container>
			<Label htmlFor={name}>{labelText}</Label>
			<FormikField id={name} name={name} {...rest} />
			<FormikErrorMessage name={name} component="span" />
		</Container>
	);
};

export default Input;
