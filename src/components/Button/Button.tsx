interface Props {
	style: 'primary' | 'secondary' | 'danger';
	size: 'default' | 'small' | 'large';
	label: string;
	type: 'button' | 'submit';
	icon: string;
	onClick?: () => void;
	onSubmit?: () => void;
}

export const Button = ({ style, size, label, type, icon, onClick, onSubmit }: Props): JSX.Element => {
	let buttonStyles: string;
	let sizeStyles: string;

	switch (style) {
		case 'primary':
			buttonStyles = 'bg-blue-600 hover:bg-blue-500 text-white rounded';
			break;
		case 'secondary':
			buttonStyles = 'bg-stone-200 hover:bg-stone-300 text-stone-800 rounded';
			break;
		case 'danger':
			buttonStyles = 'bg-red-600 hover:bg-red-500 text-white rounded';
			break;
		default:
			buttonStyles = 'bg-blue-600 hover:bg-blue-500 text-white text-sm sm:text-lg rounded';
	}

	switch (size) {
		case 'default':
			sizeStyles = 'text-sm sm:text-lg px-4 py-2';
			break
		case 'small':
			sizeStyles = 'text-sm sm:text-base px-2 py-1';
			break
		case 'large':
			sizeStyles = 'text-lg sm:text-xl px-5 py-3';
			break
		default:
			sizeStyles = 'text-sm sm:text-lg px-4 py-2';
	}

	return (
		<button
			type={ type }
			className={ `${ buttonStyles } ${ sizeStyles } inline-flex items-center` }
			onClick={ onClick }
			onSubmit={ onSubmit }
		>
			<div>
				{ icon && <i className={ `fas ${ icon } mr-2` }></i> }
			</div>
			<div className='text-center'>
				{ label }
			</div>
		</button>
	);
}
