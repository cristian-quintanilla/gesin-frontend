import { ComponentStory, ComponentMeta } from '@storybook/react';

import Pagination from '../../components/Pagination';

export default {
	title: 'Components/Pagination',
	component: Pagination,
} as ComponentMeta<typeof Pagination>;

const Template: ComponentStory<typeof Pagination> = args => <Pagination { ...args } />;

export const PaginationStory = Template.bind({});
PaginationStory.args = {
	page: 1,
	totalRecords: 5,
	paginate: (pageNumber: number) => pageNumber + 1
}
