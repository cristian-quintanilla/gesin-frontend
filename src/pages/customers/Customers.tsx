import Button from '../../components/Button';
import Header from '../../components/Header';
import LinkRouter from '../../components/LinkRouter';
import TableRecords from '../../components/TableRecords';

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
		<tr key={ _id }>
			<td className='p-2 whitespace-nowrap'>
				{ firstName } { lastName }
			</td>
			<td className='p-2 whitespace-nowrap'>
				{ company }
			</td>
			<td className='p-2 whitespace-nowrap'>
				<p className='items-center'>
		 			<i className='fas fa-envelope mr-2'></i>{ email }
		 		</p>
		 		{
		 			phone && (
		 				<p className='items-center mt-2'>
		 					<i className='fas fa-phone mr-2'></i>{ phone }
		 				</p>
		 			)
		 		}
			</td>
			<td className='p-2 whitespace-nowrap'>
				{ address.length > 25 ? address.substring(0, 30) + '...' : address }
			</td>
			<td className='flex gap-2 p-2 whitespace-nowrap'>
				<Button
					variant='danger'
					size='small'
					label='Delete'
					type='button'
					icon='fa-trash'
				/>

				<Button
					variant='primary'
					size='small'
					label='Edit'
					type='button'
					icon='fa-edit'
				/>
			</td>
		</tr>
	)
);

const Customers = (): JSX.Element => {
	return (
		<>
			<Header />

			<main className='w-full md:w-10/12 mx-auto'>
				<section className='mt-4'>
					<TableRecords
						headings={[ 'Name', 'Company', 'Contact', 'Address', 'Options' ]}
						content={ renderCustomers(customersArr) }
					/>
				</section>
			</main>
		</>
	);
}

export default Customers;
