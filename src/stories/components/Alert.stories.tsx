import { ComponentStory, ComponentMeta } from '@storybook/react';

import Alert from '../../components/Alert';

export default {
  title: 'Components/Alert',
  component: Alert,
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = args => <Alert { ...args } />;

export const AlertStory = Template.bind({});
AlertStory.args = {
  type: 'success',
  message: 'This is an alert message',
  icon: 'fa-question-circle',
}
