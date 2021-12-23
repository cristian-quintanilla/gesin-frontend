import { ComponentStory, ComponentMeta } from '@storybook/react';

import Select from '../../components/Select';

export default {
  title: 'Components/Select',
  component: Select,
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = args => <Select { ...args } />;

export const SelectStory = Template.bind({});
SelectStory.args = {
  id: 'options',
  options: [
    { id: '1', name: 'Option 1' },
    { id: '2', name: 'Option 2' },
  ],
  value: '',
}
