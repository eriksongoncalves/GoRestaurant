import React, { useMemo } from 'react';
import { Formik } from 'formik';

import { FormGroup, FormContainer } from './styles';
import FormSchema from './validation';

import Modal from '../../index';
import Button from '../../../Button';
import Input from '../../../Input';
import iconCheck from '../../../../assets/icon-check.svg';

interface ModalContentAddFoodProps extends ModalProps {
	initialValues?: Omit<FoodType, 'available'>;
	handleAddEditFood: (data: Omit<FoodType, 'id' | 'available'>) => void;
}

const ModalContentAddFood: React.FC<ModalContentAddFoodProps> = ({
	title,
	isOpen,
	initialValues,
	closeModal,
	handleAddEditFood
}) => {
	const foodData = useMemo(() => {
		return initialValues
			? initialValues
			: {
					name: '',
					description: '',
					price: 0,
					image: ''
			  };
	}, [initialValues]);

	return (
		<Modal title={title} isOpen={isOpen} closeModal={closeModal}>
			<Formik
				initialValues={foodData}
				validationSchema={FormSchema}
				onSubmit={handleAddEditFood}
			>
				<FormContainer>
					<Input
						name="image"
						labelText="URL da imagem"
						placeholder="Cole o link aqui"
					/>

					<FormGroup>
						<Input
							name="name"
							labelText="Nome do prato"
							placeholder="Ex. Moda Italiana"
						/>

						<Input name="price" labelText="Preço" placeholder="R$: 10,00" />
					</FormGroup>

					<Input
						name="description"
						labelText="Descrição do prato"
						component="textarea"
					/>

					<Button
						type="submit"
						text={initialValues ? 'Editar prato' : 'Adicionar prato'}
						icon={iconCheck}
					/>
				</FormContainer>
			</Formik>
		</Modal>
	);
};

export default ModalContentAddFood;
