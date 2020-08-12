import React, { useState, useEffect } from 'react';

import { ListCards } from './styles';

import Header from '../../components/Header';
import Card from '../../components/Card';
import {
	ModalContentAddFood,
	ModalContentConfirm
} from '../../components/Modal/contents';

import api from '../../services/api';

const Home: React.FC = () => {
	const [foods, setFoods] = useState<FoodType[]>([]);
	const [foodSelected, setFoodSelected] = useState<FoodType>();
	const [modalForm, setModalForm] = useState(false);
	const [modalConfirm, setModalConfirm] = useState(false);

	useEffect(() => {
		function fetchApi() {
			api.get<FoodType[]>('foods').then(response => {
				setFoods(response.data);
			});
		}

		fetchApi();
	}, []);

	useEffect(() => {
		if (!modalForm && !modalConfirm) {
			setFoodSelected(undefined);
		}
	}, [modalForm, modalConfirm]);

	async function handleAddEditFood(data: Omit<FoodType, 'id' | 'available'>) {
		try {
			if (foodSelected) {
				await api.put(`/foods/${foodSelected.id}`, { ...data });

				const foodsData = foods;
				const foodIndex = foods.findIndex(food => food.id === foodSelected.id);

				foodsData[foodIndex] = {
					...foodSelected,
					...data
				};

				setFoods(foodsData);
			} else {
				const response = await api.post('/foods', {
					...data,
					available: true
				});

				setFoods([...foods, response.data]);
			}
			setModalForm(false);
		} catch (err) {
			console.log(err);
		}
	}

	async function handleRemoveFood() {
		try {
			if (foodSelected) {
				await api.delete(`/foods/${foodSelected.id}`);

				const foodsData = foods.filter(food => food.id !== foodSelected.id);

				setFoods(foodsData);
				setModalConfirm(false);
			}
		} catch (err) {
			console.log(err);
		}
	}

	function toogleModal() {
		setModalForm(prevValue => !prevValue);
	}

	function toogleModalConfirm() {
		setModalConfirm(prevValue => !prevValue);
	}

	function setFood(food: FoodType) {
		setFoodSelected(food);
	}

	return (
		<>
			<Header openModalAddFood={toogleModal} />
			<ListCards>
				{foods.map(food => (
					<Card
						key={food.id}
						food={food}
						openModalEditFood={toogleModal}
						openModalRemoveFood={toogleModalConfirm}
						setFood={setFood}
					/>
				))}
			</ListCards>

			<ModalContentAddFood
				title={'Novo Prato'}
				isOpen={modalForm}
				closeModal={toogleModal}
				handleAddEditFood={handleAddEditFood}
				initialValues={foodSelected}
			/>

			<ModalContentConfirm
				title={'Remover Prato'}
				isOpen={modalConfirm}
				closeModal={toogleModalConfirm}
				message={
					foodSelected
						? `Deseja realmente excluir o prato <b>${foodSelected.name}</b>?`
						: ''
				}
				buttonText="Confirmar"
				buttonAction={handleRemoveFood}
			/>
		</>
	);
};

export default Home;
