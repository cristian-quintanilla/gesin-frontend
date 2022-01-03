import { Dispatch, SetStateAction, useCallback, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

import Button from '../../components/Button';
import Header from '../../components/Header';
import LinkRouter from '../../components/LinkRouter';
import Modal from '../../components/Modal';
import Pagination from '../../components/Pagination';
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
		_id: 'customer-1',
		firstName: 'Juan',
		lastName: 'Pérez',
		company: 'Spartacos',
		email: 'juanperez@gmail.com',
		address: 'Calle Uruguay 500 Col. Universal',
		status: true,
		phone: '182 169 1002'
	},
	{
		_id: 'customer-2',
		firstName: 'Karla',
		lastName: 'Martinez',
		company: 'Karla\'s',
		email: 'karla@gmail.com',
		address: 'Calle 20 de Noviembre Col. Centro',
		status: true,
	}
];

const renderCustomers = (
	customers: Customer[], setShowModal: Dispatch<SetStateAction<boolean>>, setIdCustomer: Dispatch<SetStateAction<string>>
): object => customers.map(
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
					onClick={() => {
						setShowModal(true);
						setIdCustomer(_id);
					}}
				/>

				<LinkRouter
					isButton
					linkText='Edit'
					linkTo={`/customers/edit/${ _id }`}
					icon='fa-edit'
					size='small'
					variant='primary'
				/>
			</td>
		</tr>
	)
);

const Customers = (): JSX.Element => {
  const [ showModal, setShowModal ] = useState(false);
	const [ idCustomer, setIdCustomer ] = useState('');
	const [ page, setPage ] = useState(1);

	//* Delete Customer
	const onDeleteCustomer = useCallback((_id: string): void => {
		toast.success(_id);
		setShowModal(false);
	}, []);

	//* Pagination
	const paginate = (pageNumber: number) => {
		// setPagination(`?page=${ pageNumber }&size=${ SIZE }&filterAnd=clientId%7Cjn%7C${ client }%26`);
		setPage(pageNumber);
	}

	return (
		<>
			<Header />

			<main className='w-full md:w-10/12 mx-auto mb-4'>
				<header className='flex items-center justify-between px-5 py-4'>
					<h2 className='text-lg md:text-2xl text-gray-800'>Customers</h2>
					<LinkRouter
						isButton
						linkText='Add Customer'
						linkTo='/customers/new'
						size='normal'
						variant='primary'
					/>
				</header>

				<section className='mt-4'>
					<TableRecords
						headings={[ 'Name', 'Company', 'Contact', 'Address', 'Options' ]}
						content={ renderCustomers(customersArr, setShowModal, setIdCustomer) }
					/>
				</section>

				<section className='flex justify-end mt-4'>
					<Pagination
						page={ page }
						totalRecords={ 8 }
						paginate={ paginate }
					/>
				</section>
			</main>

			{/* Modal for delete confirmation */}
			{ showModal ? (
        <Modal
					id={ idCustomer }
					setId={ setIdCustomer }
					onDelete={ onDeleteCustomer }
					setShowModal={ setShowModal }
				/>
      ) : null }

			{/* Toast */}
			<Toaster
				position='top-right'
				reverseOrder={false}
			/>
		</>
	);
}

export default Customers;
