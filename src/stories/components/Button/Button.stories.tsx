import { action } from '@storybook/addon-actions';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from '../../../components/Button/Button';

export default {
	title: 'Components/Button',
	component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => <Button { ...args } />;

export const PrimaryButton = Template.bind({});
PrimaryButton.args = {
	style: 'primary',
	size: 'default',
	label: 'Button',
	type: 'button',
	onClick: action('Primary Button clicked...'),
}

export const PrimaryButtonSmall = Template.bind({});
PrimaryButtonSmall.args = {
	style: 'primary',
	size: 'small',
	label: 'Small Button',
	type: 'button',
	onClick: action('Primary Button Small clicked...'),
}

export const PrimaryButtonLarge = Template.bind({});
PrimaryButtonLarge.args = {
	style: 'primary',
	size: 'large',
	label: 'Large Button',
	type: 'button',
	onClick: action('Primary Button Large clicked...'),
}

export const SecondaryButton = Template.bind({});
SecondaryButton.args = {
	style: 'secondary',
	size: 'default',
	label: 'SecondaryButton',
	type: 'button',
	onClick: action('Secondary Button clicked...'),
}

export const SecondaryButtonSmall = Template.bind({});
SecondaryButtonSmall.args = {
	style: 'secondary',
	size: 'small',
	label: 'Small SecondaryButton',
	type: 'button',
	onClick: action('Secondary Button Small clicked...'),
}

export const SecondaryButtonLarge = Template.bind({});
SecondaryButtonLarge.args = {
	style: 'secondary',
	size: 'large',
	label: 'Large SecondaryButton',
	type: 'button',
	onClick: action('Secondary Button Large clicked...'),
}

export const DangerButton = Template.bind({});
DangerButton.args = {
	style: 'danger',
	size: 'default',
	label: 'Button',
	type: 'button',
	icon: 'fa-trash',
	onClick: action('Danger Button clicked...'),
}

export const DangerButtonSmall = Template.bind({});
DangerButtonSmall.args = {
	style: 'danger',
	size: 'small',
	label: 'Small Button',
	type: 'button',
	icon: 'fa-trash',
	onClick: action('Danger Button Small clicked...'),
}

export const DangerButtonLarge = Template.bind({});
DangerButtonLarge.args = {
	style: 'danger',
	size: 'large',
	label: 'Large Button',
	type: 'button',
	icon: 'fa-trash',
	onClick: action('Danger Button Large clicked...'),
}