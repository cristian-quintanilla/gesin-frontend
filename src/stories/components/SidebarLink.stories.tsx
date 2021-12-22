import { BrowserRouter as Router } from 'react-router-dom';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import '@fortawesome/fontawesome-free/css/all.min.css';

import SidebarLink from '../../components/SidebarLink';

export default {
	title: 'Components/SidebarLink',
	component: SidebarLink,
} as ComponentMeta<typeof SidebarLink>;

const Template: ComponentStory<typeof SidebarLink> = (args) => (
	<Router>
		<SidebarLink {...args} />
	</Router>
);

export const CustomersLink = Template.bind({});
CustomersLink.args = {
	route: '/',
	text: 'Customers',
	icon: 'fa-people-arrows'
}

export const OrdersLink = Template.bind({});
OrdersLink.args = {
	route: '/',
	text: 'Orders',
	icon: 'fa-folder-open'
}

export const ProductsLink = Template.bind({});
ProductsLink.args = {
	route: '/',
	text: 'Products',
	icon: 'fa-boxes'
}
