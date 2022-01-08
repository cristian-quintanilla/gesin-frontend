import { Dispatch, SetStateAction, useCallback, useContext, useState, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';

import Alert from '../../components/Alert';
import Button from '../../components/Button';
import Header from '../../components/Header';
import LinkRouter from '../../components/LinkRouter';
import Modal from '../../components/Modal';
import Pagination from '../../components/Pagination';
import TableRecords from '../../components/TableRecords';

import customersContext from '../../context/customers/customersContext';
import { CustomerType } from '../../types';

const renderCustomers = (
	customers: CustomerType[],
	setShowModal: Dispatch<SetStateAction<boolean>>,
	setIdCustomer: Dispatch<SetStateAction<string>>
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
				{ address && address.length > 25 ? address.substring(0, 30) + '...' : address }
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
						setIdCustomer(_id as string);
					}}
				/>

				<LinkRouter
					isButton
					linkText='Edit'
					linkTo={ `/customers/edit/${ _id }`}
					icon='fa-edit'
					size='small'
					variant='primary'
				/>
			</td>
		</tr>
	)
);

const Customers = (): JSX.Element => {
	const CustomersContext = useContext(customersContext);
	const { customers, message, deleteCustomer, getCustomers, hideAlert } = CustomersContext;

	const CUSTOMERS_PER_PAGE = 2;
	const [ showModal, setShowModal ] = useState(false);
	const [ idCustomer, setIdCustomer ] = useState('');
	const [ currentPage, setCurrentPage ] = useState(1);

	//* Get customers
	useEffect(() => {
		if ( customers.length === 0 ) getCustomers();
	}, []);

	//* Delete Customer
	const onDeleteCustomer = useCallback((_id: string): void => {
		deleteCustomer(_id);
		setShowModal(false);
		setCurrentPage(1);
	}, []);

	//* Pagination
	const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

	//* Get current customers
	const indexOfLastPost = currentPage * CUSTOMERS_PER_PAGE;
	const indexOfFirstPost = indexOfLastPost - CUSTOMERS_PER_PAGE;
	const currentCustomers = customers.slice(indexOfFirstPost, indexOfLastPost);

	return (
		<>
			<Header />

			<main className='w-full md:w-10/12 mx-auto mb-4 px-6 md:px-0'>
				<section className='flex items-center justify-between px-5 py-4'>
					{
						customers.length === 0 ? (
							<>
								<h2 className='text-lg md:text-2xl text-gray-800'>No Customers.</h2>
								<LinkRouter
									isButton
									linkText='Add Customer'
									linkTo='/customers/new'
									size='normal'
									variant='primary'
								/>
							</>
						) : null
					}
					{
						customers.length > 0 ? (
							<>
								<h2 className='text-lg md:text-2xl text-gray-800'>Customers</h2>
								<LinkRouter
									isButton
									linkText='Add Customer'
									linkTo='/customers/new'
									size='normal'
									variant='primary'
								/>
							</>
						) : null
					}
				</section>

				{
					message && (
						<Alert
							type={ message.type }
							message={ message.msg }
							icon='fa-exclamation-triangle'
							hideAlert={ hideAlert }
						/>
					)
				}

				{
					customers.length > 0 && (
						<>
							<section className='mt-4'>
								<TableRecords
									headings={[ 'Name', 'Company', 'Contact', 'Address', 'Options' ]}
									content={ renderCustomers(currentCustomers, setShowModal, setIdCustomer) }
								/>
							</section>

							<section className='flex justify-end mt-4'>
								<Pagination
									page={ currentPage }
									totalRecords={ Math.ceil(customers.length / CUSTOMERS_PER_PAGE) }
									paginate={ paginate }
								/>
							</section>
						</>
					)
				}
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
