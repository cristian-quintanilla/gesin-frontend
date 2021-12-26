import Button from './Button';

type Details = {
	_id: string;
	product: {
		name: string;
		price: number;
	};
	quantity: number;
}

type Client = {
	firstName: string;
	lastName: string;
	company: string;
	email: string;
	address: string;
	phone?: string;
}

interface Props {
	order: {
		client: Client;
		details: Details[];
		total: number;
		delivered: boolean;
	}
}

const Order = ({ order }: Props): JSX.Element => {
	const { client, details, total, delivered } = order;
	const borderStyles = `border-2 rounded border-opacity-75 ${ delivered ? 'border-green-600' : 'border-blue-600' }`;

	return (
		<div className={ `grid gap-4 grid-cols-12 py-2 px-2 sm:px-4 ${ borderStyles }` }>
			<div className='py-2 px-1 sm:px-3 col-span-12 sm:col-span-5'>
				<h1 className='mb-2 text-lg sm:text-xl text-yellow-600 font-medium tracking-wide'>
					Customer: { `${ client.firstName } ${ client.lastName }` }
				</h1>
				<p className='mb-2 font-light'>E-mail: { client.email }</p>
				<p className='mb-2 font-light'>Phone: { client.phone ? client.phone : 'No phone' }</p>
				<p className='font-light'>Address: { client.address }</p>
			</div>

			<div className='py-2 px-1 sm:px-3 col-span-12 sm:col-span-7'>
				<h1 className='mb-2 text-lg sm:text-xl text-yellow-600 font-medium tracking-wide'>
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

			<div className='px-1 sm:px-3 mb-0 sm:mb-1 col-span-12'>
				{
					delivered
					? <h1 className='uppercase text-green-600 text-lg sm:text-xl'>Order Delivered</h1>
					: (
						<div className='flex gap-2'>
							<div>
								<Button
									variant='danger'
									size='small'
									label='Cancel Order'
									type='button'
									icon='fa-ban'
								/>
							</div>
							<div>
								<Button
									variant='primary'
									size='small'
									label='Deliver Order'
									type='button'
									icon='fa-truck-loading'
								/>
							</div>
						</div>
					)
				}
			</div>
		</div>
	);
}

export default Order;
