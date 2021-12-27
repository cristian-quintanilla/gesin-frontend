interface Props {
	message: string;
	type: 'success' | 'error' | 'default';
	icon: string;
}

const Alert = ({ message, type, icon }: Props): JSX.Element => {
	const classes = 'flex items-center justify-center w-12';
	const alertVariants = {
		alert_success: 'bg-green-500 text-white',
		alert_error: 'bg-red-500 text-white',
		alert_default: 'bg-blue-500 text-white',
	}

	const contentVariants = {
		alert_success: 'text-green-600',
		alert_error: 'text-red-600',
		alert_default: 'text-blue-600',
	}

	return (
		<div className='flex w-full bg-white shadow-md'>
			<div className={ `rounded-l-lg ${classes} ${alertVariants[`alert_${type}`]}` }>
				<i className={ `fas ${ icon } }` }></i>
			</div>

			<div className='px-4 py-2'>
				<div className='mx-3'>
					<p className={ `text-base ${ contentVariants[`alert_${ type }`] }` }>
						{ message }
					</p>
				</div>
			</div>
		</div>
	);
}

export default Alert;
