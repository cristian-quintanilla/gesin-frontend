import Select, { OnChangeValue } from 'react-select';

type SelectedOption = {
	value: string;
	label: string;
}

interface Props {
	name: string;
	options: SelectedOption[];
	onChange: (values: OnChangeValue<SelectedOption, true>) => void;
}

const MultiSelect = ({ name, options, onChange }: Props): JSX.Element => {
	return (
		<Select
			isMulti
			name={ name }
			options={ options }
			className='basic-multi-select'
			classNamePrefix='select'
			onChange={ onChange }
		/>
	);
}

export default MultiSelect;
