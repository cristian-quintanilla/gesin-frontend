import { Fragment, useEffect, useState, useCallback } from 'react';
import { Toaster } from 'react-hot-toast';
import Select, { SingleValue } from 'react-select';

//* Components
import Button from '../../components/Button';
import Header from '../../components/Header';
import LinkRouter from '../../components/LinkRouter';
import Order from '../../components/Order';
import Pagination from '../../components/Pagination';
import Spinner from '../../components/Spinner';

//* Hooks
import { useOrders } from '../../hooks/useOrders';

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

const ORDERS_PER_PAGE = 3;

const Orders = (): JSX.Element => {
	const { orders, totalPages, getOrders } = useOrders();

	const [ currentPage, setCurrentPage ] = useState<number>(1);
	const [ delivered, setDelivered ] = useState<string | boolean>('');
	const [ isLoading, setIsLoading ] = useState<boolean>(true);
	const [ pagination, setPagination ] = useState<string>(`?page=1&size=${ ORDERS_PER_PAGE }`);

	//* Get orders
	useEffect(() => {
		getOrders(pagination);
		setIsLoading(false);
	}, [pagination]);

	//* Pagination
	const paginate = useCallback((pageNumber: number) => {
		setPagination(`?page=${ pageNumber }&size=${ ORDERS_PER_PAGE }&delivered=${ delivered }`);
		setCurrentPage(pageNumber);
	}, [delivered, setPagination, setCurrentPage]);

	//* Change order status
	const onChangeOption = useCallback((values: SingleValue<SelectedOption>) => {
		setDelivered(values?.value as string | boolean);
	}, [setDelivered]);

	//* Search order by status or not status
	const handleSearch = (e: React.ChangeEvent<HTMLFormElement>) => {
		console.log('handleSearch');
		e.preventDefault();

		if (!delivered || delivered) {
			setPagination(`?page=1&size=${ ORDERS_PER_PAGE }&delivered=${ delivered }`);
		} else {
			setPagination(`?page=1&size=${ ORDERS_PER_PAGE }`);
		}

		setCurrentPage(1);
	};

	//* Loading
	if (isLoading) return <Spinner />;

	return (
		<>
			<Header />

			<main className='animate__animated animate__fadeIn w-full md:w-10/12 mx-auto mb-4 px-6 md:px-0 z-0'>
				<section className='flex items-center justify-between px-5 py-4'>
					<h2 className='text-lg md:text-2xl text-gray-800'>Orders</h2>

					<LinkRouter
						isButton
						linkText='New Order'
						linkTo='/orders/new'
						size='normal'
						variant='primary'
					/>
				</section>

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

				{
					orders.length > 0
					? (
						<>
							<section className='mt-6 flex flex-col gap-4'>
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
					) : (
						<h1 className='m-4 text-center text-2xl md:text-3xl uppercase'>No Orders.</h1>
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
