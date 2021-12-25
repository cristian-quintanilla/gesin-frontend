import { BrowserRouter as Router } from 'react-router-dom';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import LinkRouter from '../../components/LinkRouter';

export default {
	title: 'Components/LinkRouter',
	component: LinkRouter,
} as ComponentMeta<typeof LinkRouter>;

const Template: ComponentStory<typeof LinkRouter> = args => (
	<Router>
		<LinkRouter { ...args } />
	</Router>
);

export const LinkRouterStory = Template.bind({});
LinkRouterStory.args = {
	isButton: false,
	linkText: 'LinkRouter',
	linkTo: '/',
	variant: 'primary',
}
