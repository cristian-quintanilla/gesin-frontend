import { ComponentStory, ComponentMeta } from '@storybook/react';

import Number from '../../components/Number';

export default {
  title: 'Components/Number',
  component: Number,
} as ComponentMeta<typeof Number>;

const Template: ComponentStory<typeof Number> = args => <Number { ...args } />;

export const NumberStory = Template.bind({});
NumberStory.args = {
  id: 'quantity',
  name: 'quantity',
  value: 10,
  min: 0,
  max: 100,
  product: 'Mochila para Laptop',
}
