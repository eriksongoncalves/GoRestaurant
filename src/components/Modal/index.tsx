import React from 'react';

import {
	Container,
	ModalContainer,
	ModalTitle,
	ModalBody,
	CloseButton
} from './styles';

const Modal: React.FC<ModalProps> = ({
	title,
	isOpen,
	closeModal,
	children
}) => {
	if (!isOpen) return null;

	return (
		<Container>
			<ModalContainer>
				<CloseButton onClick={closeModal}>X</CloseButton>
				<ModalTitle>{title}</ModalTitle>
				<ModalBody>{children}</ModalBody>
			</ModalContainer>
		</Container>
	);
};

export default Modal;
