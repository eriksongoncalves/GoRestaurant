import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	text: string;
	icon: string;
}

const Button: React.FC<ButtonProps> = ({
	type = 'button',
	text,
	icon,
	...rest
}) => {
	return (
		<button type={type} {...rest}>
			<p>{text}</p>
			<div>
				<img src={icon} alt={text} />
			</div>
		</button>
	);
};

export default Button;
