import { Fragment, useContext, useEffect, useState } from 'react';
import Select, { SingleValue } from 'react-select';

import Button from '../../components/Button';
import Header from '../../components/Header';
import LinkRouter from '../../components/LinkRouter';
import Order from '../../components/Order';
import Pagination from '../../components/Pagination';

import ordersContext from '../../context/orders/ordersContext';
import { OrderType } from '../../types';

type Details = {
	_id: string;
	product: {
		_id: string;
		name: string;
		price: number;
	};
	quantity: number;
}

type Client = {
	_id: string;
	firstName: string;
	lastName: string;
	company: string;
	email: string;
	address?: string;
	phone?: string;
	status: boolean;
	__v?: number;
}

interface Order {
	_id: string;
	client: Client;
	details: Details[];
	total: number;
	delivered: boolean;
}


const ordersArr: Order[] = [
	{
		_id: '61b65e814848e3470a90f4c1',
		client: {
      _id: '61b65e814848e3470a90f4c1',
      firstName: 'Juan',
      lastName: 'Perez',
      company: 'Spartacos',
      email: 'juanperez@gmail.com',
      address: 'Calle Uruguay 500 Col. Universal',
      phone: '182 169 1002',
      status: true,
      __v: 0,
    },
		details: [
      {
        _id: '61b65e814848e3470a90f4c2',
        product: {
					_id: 'product-1',
          name: 'Mochila para Laptop',
          price: 199.99
        },
        quantity: 5,
      },
      {
        _id: '61b65e814848e3470a90f4c3',
        product: {
					_id: 'product-2',
          name: 'Memoria USB',
          price: 100.00
        },
        quantity: 2,
      }
    ],
    total: 1199.95,
    delivered: true,
	},
	{
		_id: '61b661734a4dc82f42b0268a',
		client: {
			_id: '61b2b5d6cc192be8c6af3bf3',
			firstName: 'Juan',
			lastName: 'Pérez',
			company: 'Spartacos',
			email: 'juanperez@gmail.com',
			address: 'Calle Uruguay 500 Col. Universal',
			status: true,
			__v: 0,
			phone: '182 169 1002'
		},
		details: [
			{
				product: {
					_id: '61b2b213005c3c8c33d39960',
					name: 'Mochila para Laptop',
					price: 199.99
				},
				quantity: 5,
				_id: '61b661734a4dc82f42b0268b'
			}
		],
		total: 999.95,
		delivered: false
	},
	{
		_id: '61b65e814848e3470a90f4aa',
		client: {
      _id: '61b65e814848e3470a90f4c1',
      firstName: 'Juan',
      lastName: 'Perez',
      company: 'Spartacos',
      email: 'juanperez@gmail.com',
      address: 'Calle Uruguay 500 Col. Universal',
      phone: '182 169 1002',
      status: true,
      __v: 0,
    },
		details: [
      {
        _id: '61b65e814848e3470a90f4c2',
        product: {
					_id: 'product-1',
          name: 'Mochila para Laptop',
          price: 199.99
        },
        quantity: 5,
      },
      {
        _id: '61b65e814848e3470a90f4c3',
        product: {
					_id: 'product-2',
          name: 'Memoria USB',
          price: 100.00
        },
        quantity: 2,
      }
    ],
    total: 1199.95,
    delivered: true,
	},
	{
		_id: '61b661734a4dc82f42b026aa',
		client: {
			_id: '61b2b5d6cc192be8c6af3bf3',
			firstName: 'Juan',
			lastName: 'Pérez',
			company: 'Spartacos',
			email: 'juanperez@gmail.com',
			address: 'Calle Uruguay 500 Col. Universal',
			status: true,
			__v: 0,
			phone: '182 169 1002'
		},
		details: [
			{
				product: {
					_id: '61b2b213005c3c8c33d39960',
					name: 'Mochila para Laptop',
					price: 199.99
				},
				quantity: 5,
				_id: '61b661734a4dc82f42b0268b'
			}
		],
		total: 999.95,
		delivered: false
	}
];


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
	const { message, orders, getOrders } = OrdersContext;

	const ORDERS_PER_PAGE = 2;
	const [ currentPage, setCurrentPage ] = useState(1);
	const [ delivered, setDelivered ] = useState<string | boolean>('');
	const [ pagination, setPagination ] = useState(`?page=1&size=${ ORDERS_PER_PAGE }`);

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

		if ( delivered === false || delivered === true ) {
			setPagination(`?page=1&size=${ ORDERS_PER_PAGE }&delivered=${ delivered }`);
		} else {
			setPagination(`?page=1&size=${ ORDERS_PER_PAGE }`);
		}
	}

	return (
		<>
			<Header />

			<main className='w-full md:w-10/12 mx-auto mb-4'>
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

				<section className='mt-4 flex flex-col gap-4'>
					{
						ordersArr.map(order => (
							<Fragment key={ order._id }>
								<Order order={ order } />
							</Fragment>
						))
					}
				</section>

				<section className='flex justify-end mt-4'>
					<Pagination
						page={ currentPage }
						totalRecords={ 3 }
						paginate={ paginate }
					/>
				</section>
			</main>
		</>
	);
}

export default Orders;
