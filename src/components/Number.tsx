interface Props {
  id: string;
  name: string;
  value: number;
  min: number;
  max: number;
	product: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Number = ({ id, name, min, max, value, product, onChange }: Props): JSX.Element => {
	return (
		<div className='flex items-center justify-between gap-4'>
			<label htmlFor={ id }>{ product }:</label>

			<input
				className='rounded border-2 border-gray-300 focus:border-blue-600 outline-none text-gray-700 py-1 px-3 duration-200 ease-in-out'
				type='number'
				id={ id }
				name={ name }
				min={ min }
				max={ max }
				placeholder='Quantity'
				value={ value }
				onChange={ onChange }
			/>
		</div>
	);
}

export default Number;
