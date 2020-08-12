import React from 'react';

import { HeaderContainer, Logo, Container } from './styles';
import Button from '../Button';

import logo from '../../assets/logo.svg';
import iconPlus from '../../assets/icon-plus.svg';

type HeaderProps = {
	openModalAddFood: () => void;
};

const Header: React.FC<HeaderProps> = ({ openModalAddFood }) => {
	return (
		<HeaderContainer>
			<Container>
				<Logo src={logo} alt="Go Restaurant - Comida Italiana, sim." />
				<Button text="Novo Prato" icon={iconPlus} onClick={openModalAddFood} />
			</Container>
		</HeaderContainer>
	);
};

export default Header;
