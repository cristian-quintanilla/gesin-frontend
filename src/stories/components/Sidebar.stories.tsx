import { BrowserRouter as Router } from 'react-router-dom';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Sidebar from '../../components/Sidebar';

export default {
	title: 'Components/Sidebar',
	component: Sidebar,
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = () => (
	<Router>
		<Sidebar />
	</Router>
);

export const SidebarStory = Template.bind({});
