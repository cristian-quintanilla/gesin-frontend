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
	style: 'bg-blue-600 hover:bg-blue-500 text-white text-sm sm:text-lg rounded',
	size: 'px-4 py-2',
	label: 'Button',
	type: 'button',
	bold: false,
	onClick: action('Primary Button clicked...'),
}

export const PrimaryButtonSmall = Template.bind({});
PrimaryButtonSmall.args = {
	style: 'bg-blue-600 hover:bg-blue-500 text-white text-sm sm:text-base rounded',
	size: 'px-2 py-1',
	label: 'Small Button',
	type: 'button',
	bold: false,
	onClick: action('Primary Button Small clicked...'),
}

export const PrimaryButtonLarge = Template.bind({});
PrimaryButtonLarge.args = {
	style: 'bg-blue-600 hover:bg-blue-500 text-white text-lg sm:text-xl rounded',
	size: 'px-5 py-3',
	label: 'Large Button',
	type: 'button',
	bold: false,
	onClick: action('Primary Button Large clicked...'),
}

export const SecondaryButton = Template.bind({});
SecondaryButton.args = {
	style: 'bg-stone-200 hover:bg-stone-300 text-stone-800 text-sm sm:text-lg rounded',
	size: 'px-4 py-2',
	label: 'SecondaryButton',
	type: 'button',
	bold: false,
	onClick: action('Secondary Button clicked...'),
}

export const SecondaryButtonSmall = Template.bind({});
SecondaryButtonSmall.args = {
	style: 'bg-stone-200 hover:bg-stone-300 text-stone-800 text-sm sm:text-base rounded',
	size: 'px-2 py-1',
	label: 'Small SecondaryButton',
	type: 'button',
	bold: false,
	onClick: action('Secondary Button Small clicked...'),
}

export const SecondaryButtonLarge = Template.bind({});
SecondaryButtonLarge.args = {
	style: 'bg-stone-200 hover:bg-stone-300 text-stone-800 text-lg sm:text-xl rounded',
	size: 'px-5 py-3',
	label: 'Large SecondaryButton',
	type: 'button',
	bold: false,
	onClick: action('Secondary Button Large clicked...'),
}
