import { action } from '@storybook/addon-actions';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from '../../components/Button';

export default {
	title: 'Components/Button',
	component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => <Button { ...args } />;

export const ButtonStory = Template.bind({});
ButtonStory.args = {
	style: 'primary',
	size: 'default',
	label: 'Button',
	type: 'button',
	onClick: action('Button clicked...'),
	onSubmit: action('Button submit...'),
}
