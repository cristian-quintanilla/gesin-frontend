import Select, { OnChangeValue } from 'react-select';

type SelectedOption = {
	value: string;
	label: string;
}

interface Props {
	name: string;
	options: SelectedOption[];
	placeholder: string;
	onChange: (values: OnChangeValue<SelectedOption, true>) => void;
}

const MultiSelect = ({ name, options, placeholder, onChange }: Props): JSX.Element => {
	return (
		<Select
			isMulti
			name={ name }
			options={ options }
			className='basic-multi-select'
			classNamePrefix='select'
			placeholder={ placeholder }
			onChange={ onChange }
		/>
	);
}

export default MultiSelect;
