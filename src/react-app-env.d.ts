/// <reference types="react-scripts" />

type FoodType = {
	id: number;
	name: string;
	description: string;
	price: number;
	available: boolean;
	image: string;
};

type ModalProps = {
	title: string;
	isOpen: boolean;
	closeModal: () => void;
};
