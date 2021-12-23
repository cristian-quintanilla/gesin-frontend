interface Props {
	message: string;
	type: 'success' | 'error' | 'normal';
	icon?: string;
}

const Alert = ({ message, type, icon }: Props): JSX.Element => {
	const classes = 'rounded px-4 py-2 mb-4 font-medium tracking-wide';
	let alertClasses: string = '';

	switch (type) {
		case 'success':
			alertClasses = `${ classes } bg-emerald-100 text-emerald-600`;
			break;
		case 'normal':
			alertClasses = `${ classes } bg-yellow-100 text-yellow-700`;
			break;
		case 'error':
			alertClasses = `${ classes } bg-red-100 text-red-700`;
			break;
		default:
			alertClasses = `${ classes } bg-emerald-100 text-emerald-600`;
	}

	return (
		<div className={ alertClasses }>
			{ icon && <i className={ `fas ${ icon } mr-2 }` }></i> }
			{ message }
		</div>
	);
}

export default Alert;
