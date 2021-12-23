type Options = {
	id: string;
	name: string;
}

interface Props {
	id: string;
	options: Options[];
	value: string;
	onChange: () => void;
	onBlur: () => void;
}

const Select = ({ id, options, value, onChange, onBlur }: Props) => {
	return (
		<select
			className='px-2 py-1 text-gray-700 bg-white border-2 border-gray-300 focus:border-blue-600 outline-none cursor-pointer rounded'
			id={ id }
			value={ value }
			onChange={ onChange }
			onBlur={ onBlur }
		>
			{
				options.map(option => (
					<option key={ option.id } value={ option.id }>{ option.name }</option>
				))
			}
		</select>
	);
}

export default Select;
