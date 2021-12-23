interface Props {
  id: string;
  name: string;
  value: number;
  min: number;
  max: number;
	product: string;
  onChange: () => void;
  onBlur: () => void;
}

const Number = ({ id, name, min, max, value, product, onChange, onBlur }: Props): JSX.Element => {
	return (
		<div className='flex items-center gap-6'>
			<label htmlFor={ id }>{ product }:</label>

			<input
				type='number'
				id={ id }
				name={ name }
				min={ min }
				max={ max }
				placeholder='Quantity'
				className='flex-1 rounded border-2 border-gray-300 focus:border-blue-600 outline-none text-gray-700 py-1 px-3 duration-200 ease-in-out'
				value={ value }
				onChange={ onChange }
				onBlur={ onBlur }
			/>
		</div>
	);
}

export default Number;
