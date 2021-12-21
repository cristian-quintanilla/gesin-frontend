interface Props {
	style: string;
	size: 'px-4 py-2' | 'px-2 py-1' | 'px-5 py-3';
	label: string;
	type: 'button' | 'submit';
	bold?: boolean;
	onClick?: () => void;
	onSubmit?: () => void;
}

export const Button = ({ style, size, label, type, bold, onClick, onSubmit }: Props): JSX.Element => {
	const styles = `${ style } ${ size } ${ bold ? 'font-semibold' : '' }`;
	console.log(styles);

	return (
		<button
			type={ type }
			className={ `${ style } ${ size } ${ bold ? 'font-bold' : '' }` }
			onClick={ onClick }
			onSubmit={ onSubmit }
		>
			{ label }
		</button>
	);
}
