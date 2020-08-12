import React from 'react';

import {
	Container,
	CardHeader,
	CardBody,
	CardTitle,
	CardDescription,
	CardPrice,
	CardFooter,
	CardActions,
	CardStatus,
	OnOff
} from './styles';

import iconEdit from '../../assets/icon-edit.svg';
import iconTrash from '../../assets/icon-trash.svg';

type CartProps = {
	food: FoodType;
	openModalEditFood: () => void;
	openModalRemoveFood: () => void;
	setFood: (food: FoodType) => void;
};

const Card: React.FC<CartProps> = ({
	food,
	openModalEditFood,
	openModalRemoveFood,
	setFood
}) => {
	function editFood() {
		setFood(food);
		openModalEditFood();
	}

	function removeFood() {
		setFood(food);
		openModalRemoveFood();
	}

	return (
		<Container>
			<CardHeader avaiable={food.available}>
				<img src={food.image} alt={food.name} />
			</CardHeader>
			<CardBody>
				<CardTitle>{food.name}</CardTitle>
				<CardDescription>{food.description}</CardDescription>
				<CardPrice>
					<span>R$</span> {food.price}
				</CardPrice>
			</CardBody>
			<CardFooter>
				<CardActions>
					<a href="#" onClick={editFood}>
						<img src={iconEdit} alt="Editar" />
					</a>

					<a href="#" onClick={removeFood}>
						<img src={iconTrash} alt="Remover" />
					</a>
				</CardActions>
				<CardStatus>
					<span>Disponível</span>
					<OnOff avaiable={food.available} />
				</CardStatus>
			</CardFooter>
		</Container>
	);
};

export default Card;
