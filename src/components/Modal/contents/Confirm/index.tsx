import React from 'react';

import { Actions, CloseModal, Message } from './styles';
import Modal from '../../index';
import Button from '../../../Button';
import iconCheck from '../../../../assets/icon-check.svg';

interface ModalContentConfirmProps extends ModalProps {
	message: string;
	buttonText: string;
	buttonAction: () => void;
}

const ModalContentConfirm: React.FC<ModalContentConfirmProps> = ({
	title,
	isOpen,
	closeModal,
	message,
	buttonText,
	buttonAction
}) => {
	return (
		<Modal title={title} isOpen={isOpen} closeModal={closeModal}>
			<Message dangerouslySetInnerHTML={{ __html: message }} />

			<Actions>
				<CloseModal onClick={closeModal}>Cancelar</CloseModal>
				<Button text={buttonText} icon={iconCheck} onClick={buttonAction} />
			</Actions>
		</Modal>
	);
};

export default ModalContentConfirm;
