import { useCallback, useState } from 'react';

//* Components
import Button from './Button';
import ModalOrder from './ModalOrder';

//* Hooks and Types
import { useOrders } from '../hooks/useOrders';
import { OrderType } from '../types/index';

interface Props {
	order: OrderType
}

const Order = ({ order }: Props): JSX.Element => {
	const { cancelOrder, deliverOrder } = useOrders();

	const [ showModalCancel, setShowModalCancel ] = useState(false);
	const [ showModalDeliver, setShowModalDeliver ] = useState(false);
	const [ idOrder, setIdOrder ] = useState('');

	const onCancelOrder = useCallback((_id: string): void => {
		cancelOrder(_id);
		setShowModalCancel(false);
	}, []);

	const onDeliverOrder = useCallback((_id: string): void => {
		deliverOrder(_id);
		setShowModalDeliver(false);
	}, []);

	const { client, details, total, delivered, updatedAt } = order;
	const borderStyles = `rounded shadow-lg ${ delivered ? 'shadow-green-600' : 'shadow-blue-600' }`;

	return (
		<>
			<div className={ `animate__animated animate__fadeIn grid gap-4 grid-cols-12 py-3 md:py-2 px-3 md:px-4 ${ borderStyles }` }>
				<div className='py-2 px-1 md:px-3 col-span-12 md:col-span-5'>
					<h1 className='mb-2 text-lg md:text-xl font-medium tracking-wide'>
						Customer: { `${ client.firstName } ${ client.lastName }` }
					</h1>
					<p className='mb-2 font-light'>E-mail: { client.email }</p>
					<p className='mb-2 font-light'>Phone: { client.phone ? client.phone : 'No phone' }</p>
					<p className='font-light'>Address: { client.address ? client.address : 'No address' }</p>
				</div>

				<div className='py-2 px-1 md:px-3 col-span-12 md:col-span-7'>
					<h1 className='mb-2 text-lg md:text-xl font-medium tracking-wide'>
						Resume
					</h1>

					{
						details.map(detail => (
							<article key={ detail._id } className='flex flex-col gap-1 font-light mb-2 py-2'>
								<p><strong>Product: </strong>{ detail.product.name }</p>
								<p><strong>Quantity: </strong>{ detail.quantity }</p>
								<p><strong>Price: </strong>{ detail.product.price }</p>
							</article>
						))
					}

					<p className='mt-4 text-green-700 text-lg md:text-2xl font-medium'>Total: ${ total }</p>
				</div>

				<div className='px-1 md:px-3 mb-0 md:mb-1 col-span-12'>
					{
						delivered
						? (
							<h1 className='uppercase text-green-700 text-lg md:text-2xl'>
								Order Delivered: { new Date(`${ updatedAt }`).toLocaleDateString('es-MX') }
							</h1>
						) : (
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
		</>
	);
}

export default Order;
