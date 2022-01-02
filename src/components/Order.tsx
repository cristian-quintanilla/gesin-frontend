import { useCallback, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

import Button from './Button';
import ModalOrder from './ModalOrder';

type Details = {
	_id: string;
	product: {
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

interface Props {
	order: {
		_id: string;
		client: Client;
		details: Details[];
		total: number;
		delivered: boolean;
	}
}

const Order = ({ order }: Props): JSX.Element => {
	const [ showModalCancel, setShowModalCancel ] = useState(false);
	const [ showModalDeliver, setShowModalDeliver ] = useState(false);
	const [ idOrder, setIdOrder ] = useState('');

	const onCancelOrder = useCallback((_id: string): void => {
		toast.success(`Canceling order ${_id}`);
		setShowModalCancel(false);
	}, []);

	const onDeliverOrder = useCallback((_id: string): void => {
		toast.success(`Delivering order ${_id}`);
		setShowModalDeliver(false);
	}, []);

	const { client, details, total, delivered } = order;
	const borderStyles = `border-2 rounded ${ delivered ? 'border-green-600' : 'border-blue-600' }`;

	return (
		<>
			<div className={ `grid gap-4 grid-cols-12 py-2 px-2 md:px-4 ${ borderStyles }` }>
				<div className='py-2 px-1 md:px-3 col-span-12 md:col-span-5'>
					<h1 className='mb-2 text-lg md:text-xl text-yellow-600 font-medium tracking-wide'>
						Customer: { `${ client.firstName } ${ client.lastName }` }
					</h1>
					<p className='mb-2 font-light'>E-mail: { client.email }</p>
					<p className='mb-2 font-light'>Phone: { client.phone ? client.phone : 'No phone' }</p>
					<p className='font-light'>Address: { client.address }</p>
				</div>

				<div className='py-2 px-1 md:px-3 col-span-12 md:col-span-7'>
					<h1 className='mb-2 text-lg md:text-xl text-yellow-600 font-medium tracking-wide'>
						Resume
					</h1>

					{
						details.map(detail => (
							<p key={ detail._id } className='font-light mb-1'>
								Product - { detail.product.name } - Quantity: { detail.quantity } - Price: { detail.product.price }
							</p>
						))
					}

					<p className='mt-2 text-green-600 text-lg font-semibold'>Total: ${ total }</p>
				</div>

				<div className='px-1 md:px-3 mb-0 md:mb-1 col-span-12'>
					{
						delivered
						? <h1 className='uppercase text-green-600 text-lg md:text-xl'>Order Delivered</h1>
						: (
							<div className='flex gap-2'>
								<div>
									<Button
										variant='danger'
										size='normal'
										label='Cancel Order'
										type='button'
										icon='fa-ban'
										onClick={() => {
											setShowModalCancel(true);
											setIdOrder(order._id);
										}}
									/>
								</div>
								<div>
									<Button
										variant='primary'
										size='normal'
										label='Deliver Order'
										type='button'
										icon='fa-truck-loading'
										onClick={() => {
											setShowModalDeliver(true);
											setIdOrder(order._id);
										}}
									/>
								</div>
							</div>
						)
					}
				</div>
			</div>

			{/* Modal for cancel order */}
			{ showModalCancel ? (
        <ModalOrder
					type='cancel'
					id={ idOrder }
					setId={ setIdOrder }
					onAction={ onCancelOrder }
					setShowModal={ setShowModalCancel }
				/>
      ) : null }

			{/* Modal for deliver order */}
			{ showModalDeliver ? (
        <ModalOrder
					type='deliver'
					id={ idOrder }
					setId={ setIdOrder }
					onAction={ onDeliverOrder }
					setShowModal={ setShowModalDeliver }
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

export default Order;
