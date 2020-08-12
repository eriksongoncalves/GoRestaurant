import * as Yup from 'yup';

export default Yup.object().shape({
	image: Yup.string().required('Campo obrigatório'),
	name: Yup.string()
		.required('Campo obrigatório')
		.min(5, 'Mínimo 5 caracteres'),
	price: Yup.string().required('Campo obrigatório'),
	description: Yup.string().required('Campo obrigatório')
});
