import { action } from '@storybook/addon-actions';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TableRecords } from '../../../components/Table/TableRecords';
import { Button } from '../../../components/Button/Button';

export default {
	title: 'Components/Table/TableRecords',
	component: TableRecords,
} as ComponentMeta<typeof TableRecords>;

const Template: ComponentStory<typeof TableRecords> = args => <TableRecords { ...args } />;

interface Customer {
	_id: string;
	firstName: string;
	lastName: string;
	company: string;
	email: string;
	address: string;
	phone?: string;
	status: boolean;
}

const customersArr = [
	{
		_id: '61b2b5d6cc192be8c6af3bf3',
		firstName: 'Juan',
		lastName: 'Pérez',
		company: 'Spartacos',
		email: 'juanperez@gmail.com',
		address: 'Calle Uruguay 500 Col. Universal',
		status: true,
		phone: '182 169 1002'
	},
	{
		_id: '61b2b621cc192be8c6af3bf6',
		firstName: 'Karla',
		lastName: 'Martinez',
		company: 'Karla\'s',
		email: 'karla@gmail.com',
		address: 'Calle 20 de Noviembre Col. Centro',
		status: true,
	}
];

const renderCustomers = (customers: Customer[]): object => customers.map(
	({ _id, firstName, lastName, company, email, address, phone }) => (
		<tr className='bg-gray-100' key={ _id }>
			<td className='border-2 border-gray-400 py-1 px-4 text-sm sm:text-base text-gray-700'>
				{ firstName } { lastName }
			</td>
			<td className='border-2 border-gray-400 py-1 px-4 text-sm sm:text-base text-gray-700'>
				{ company }
			</td>
			<td className='border-2 border-gray-400 py-1 px-2 text-sm sm:text-base text-gray-700'>
				<p className='inline-flex items-center'>
					<i className='fas fa-envelope mr-2'></i>{ email }
				</p>
				{
					phone && (
						<p className='inline-flex items-center'>
							<i className='fas fa-phone mr-2'></i>{ phone }
						</p>
					)
				}
			</td>
			<td className='border-2 border-gray-400 py-1 px-2 text-sm sm:text-base text-gray-700'>
				{ address.length > 25 ? address.substring(0, 25) + '...' : address }
			</td>
			<td className='border-r-2 border-b-2 border-gray-400 py-2 px-4 flex flex-col items-center gap-2'>
				<div>
					<Button
						style={ 'danger' }
						size={ 'small' }
						label={ 'Delete' }
						type={ 'button' }
						icon={ 'fa-trash' }
					/>
				</div>
				<div>
					<Button
						style={ 'primary' }
						size={ 'small' }
						label={ 'Edit' }
						type={ 'button' }
						icon={ 'fa-edit' }
					/>
				</div>
			</td>
		</tr>
	)
);

export const Customers = Template.bind({});
Customers.args = {
	headings: [ 'Name', 'Company', 'Contact', 'Address', 'Options' ],
	content: renderCustomers(customersArr),
}
