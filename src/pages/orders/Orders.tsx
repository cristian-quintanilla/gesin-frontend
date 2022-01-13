import { Fragment, useContext, useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import Select, { SingleValue } from 'react-select';

import Button from '../../components/Button';
import Header from '../../components/Header';
import LinkRouter from '../../components/LinkRouter';
import Order from '../../components/Order';
import Pagination from '../../components/Pagination';

import ordersContext from '../../context/orders/ordersContext';

type SelectedOption = {
	value: boolean | string;
	label: string;
}

const arrayOptions: SelectedOption[] = [
	{
		value: '',
		label: 'All Orders',
	},
	{
		value: false,
		label: 'Not Delivered',
	},
	{
		value: true,
		label: 'Delivered',
	},
];

const Orders = (): JSX.Element => {
	const OrdersContext = useContext(ordersContext);
	const { orders, totalPages, getOrders } = OrdersContext;

	const ORDERS_PER_PAGE = 2;
	const [ currentPage, setCurrentPage ] = useState(1);
	const [ delivered, setDelivered ] = useState<string | boolean>('');
	const [ pagination, setPagination ] = useState(`?page=1&size=${ ORDERS_PER_PAGE }`);

	//* Get orders
	if (orders.length === 0) {
		getOrders(`?page=1&size=${ ORDERS_PER_PAGE }`);
	}

	//* Get orders
	useEffect(() => {
		getOrders(pagination);
	}, [pagination]);

	//* Pagination
	const paginate = (pageNumber: number) => {
		setPagination(`?page=${ pageNumber }&size=${ ORDERS_PER_PAGE }&delivered=${ delivered }`);
		setCurrentPage(pageNumber);
	}

	//* Change order status
	const onChangeOption = (values: SingleValue<SelectedOption>) => {
		setDelivered(values?.value as string | boolean);
	}

	//* Search order by status or not status
	const handleSearch = (e: React.ChangeEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (delivered === false || delivered === true) {
			setPagination(`?page=1&size=${ ORDERS_PER_PAGE }&delivered=${ delivered }`);
		} else {
			setPagination(`?page=1&size=${ ORDERS_PER_PAGE }`);
		}
	}

	return (
		<>
			<Header />

			<main className='animate__animated animate__fadeIn w-full md:w-10/12 mx-auto mb-4 px-6 md:px-0'>
				<section className='flex items-center justify-between px-5 py-4'>
					{
						orders.length === 0 ? (
							<>
								<h2 className='text-lg md:text-2xl text-gray-800'>No Orders</h2>
								<LinkRouter
									isButton
									linkText='Create Order'
									linkTo='/orders/new'
									size='normal'
									variant='primary'
								/>
							</>
						) : (
							<>
								<h2 className='text-lg md:text-2xl text-gray-800'>Orders</h2>
								<LinkRouter
									isButton
									linkText='New Order'
									linkTo='/orders/new'
									size='normal'
									variant='primary'
								/>
							</>
						)
					}
				</section>

				{
					orders.length > 0 && (
						<>
							<form
								onSubmit={ handleSearch }
								className='flex items-center justify-between px-5 py-4 shadow-md rounded'
							>
								<Select
									name='clients'
									options={ arrayOptions }
									className='basic-single'
									classNamePrefix='select'
									onChange={ onChangeOption }
									placeholder='Select an option'
								/>

								<div className='flex gap-3'>
									<Button
										variant='primary'
										size='normal'
										label='Search'
										type='submit'
										icon='fa-search'
									/>
								</div>
							</form>

							<section className='mt-4 flex flex-col gap-4'>
								{
									orders.map(order => (
										<Fragment key={ order._id }>
											<Order order={ order } />
										</Fragment>
									))
								}
							</section>

							<section className='flex justify-end mt-4'>
								<Pagination
									page={ currentPage }
									totalRecords={ totalPages }
									paginate={ paginate }
								/>
							</section>
						</>
					)
				}
			</main>

			{/* Toast */}
			<Toaster
				position='top-right'
				reverseOrder={ false }
			/>
		</>
	);
}

export default Orders;
