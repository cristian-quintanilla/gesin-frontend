interface Props {
	type: 'text' | 'email' | 'password';
	id: string;
	name: string;
	placeholder: string;
	value: string;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	onBlur: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ type, id, name, placeholder, value, onChange, onBlur }: Props): JSX.Element => {
	return (
		<input
			type={ type }
			id={ id }
			name={ name }
			placeholder={ placeholder }
			className='w-full rounded border-2 border-gray-300 focus:border-blue-600 outline-none text-gray-700 py-2 px-3 duration-200 ease-in-out'
			autoComplete='off'
			value={ value }
			onChange={ onChange }
			onBlur={ onBlur }
		/>
	);
}

export default Input;
