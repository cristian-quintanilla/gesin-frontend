interface Props {
	variant: 'primary' | 'secondary' | 'danger';
	size: 'normal' | 'small' | 'large';
	label?: string;
	type: 'button' | 'submit';
	icon?: string;
	disabled?: boolean;
	onClick?: () => void;
	onSubmit?: () => void;
}

const Button = ({ variant, size, label, type, icon, disabled, onClick, onSubmit }: Props): JSX.Element => {
	const buttonVariants = {
		button_primary: 'bg-blue-600 hover:bg-blue-500 text-white rounded ',
		button_secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-800 rounded ',
		button_danger: 'bg-red-600 hover:bg-red-500 text-white rounded ',
	}

	const sizeVariants = {
		size_normal: 'text-sm md:text-lg px-4 py-1',
		size_small: 'text-sm px-2 py-1',
		size_large: 'text-lg md:text-xl px-5 py-3',
	}

	const styles = buttonVariants[`button_${ variant }`] + sizeVariants[`size_${ size }`];

	return (
		<button
			type={ type }
			className={ `${ styles } ${ disabled ? 'opacity-60' : '' } inline-flex items-center` }
			disabled={ disabled }
			onClick={ onClick }
			onSubmit={ onSubmit }
		>
			<div>
				{ icon && <i className={ `fas ${ icon } ${ label ? 'mr-2' : '' }` }></i> }
			</div>
			{ label && <div className='text-center'>{ label }</div> }
		</button>
	);
}

export default Button;
