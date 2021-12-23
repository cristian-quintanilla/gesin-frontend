import { ComponentStory, ComponentMeta } from '@storybook/react';

import MultiSelect from '../../components/MultiSelect';

export default {
  title: 'Components/MultiSelect',
  component: MultiSelect,
} as ComponentMeta<typeof MultiSelect>;

const Template: ComponentStory<typeof MultiSelect> = args => <MultiSelect { ...args } />;

export const MultiSelectStory = Template.bind({});
MultiSelectStory.args = {
  name: 'products',
	options: [
		{ value: '1', label: 'Mochila - 10 Disponibles' },
		{ value: '2', label: 'Memoria USB - 100 Disponibles' },
		{ value: '3', label: 'Laptop - 8 Disponibles' },
	]
}
