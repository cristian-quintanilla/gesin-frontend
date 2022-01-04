import { useState, Fragment } from 'react';
import Select, { OnChangeValue, SingleValue } from 'react-select';

import Header from '../../components/Header';
import MultiSelect from '../../components/MultiSelect';
import Number from '../../components/Number';
import Button from '../../components/Button';
import LinkRouter from '../../components/LinkRouter';

type SelectedOption = {
	value: string;
	label: string;
}

interface Order {
	client: string;
	details: {
		product: string;
		quantity: number;
		label?: string;
	}[];
}

const arrayCustomers: SelectedOption[] = [
	{
		value: 'customer1',
		label: 'Juan Perez',
	},
	{
		value: 'customer2',
		label: 'Pedro Martínez',
	},
	{
		value: 'customer3',
		label: 'María Rodríguez',
	},
	{
		value: 'customer4',
		label: 'Elon Musk',
	}
];

const arrayProducts: SelectedOption[] = [
	{
		value: 'product1',
		label: 'Mochila',
	},
	{
		value: 'product2',
		label: 'Celular',
	},
	{
		value: 'product3',
		label: 'Cámara',
	},
	{
		value: 'product4',
		label: 'Laptop HP 15',
	}
];

const AddOrder = (): JSX.Element => {
	const [ details, setDetails ] = useState<{
		product: string;
		label: string;
		quantity: number;
	}[]>([]);

	const [ order, setOrder ] = useState<Order>({
		client: '',
		details: [],
	});

	//* Add client to the order
	const onChangeCustomer = (values: SingleValue<SelectedOption>) => {
		setOrder(order => ({
			...order,
			client: values?.value || '',
		}));
	}

	//* Add product to the order
	const onChangeProducts = (values: OnChangeValue<SelectedOption, true>) => {
		if (values){
			setDetails(values.map(({ value, label }) => ({
				product: value,
				quantity: 1,
				label,
			})));
		}
	}

	//* Change quantity of the product
	const onChangeQuantity = (e: React.ChangeEvent<HTMLInputElement>) => {
		setDetails(quantities => quantities.map(quantity => {
			if (quantity.product === e.target.name) {
				return {
					...quantity,
					quantity: e.target.valueAsNumber,
				}
			}

			return quantity;
		}));

		//* Remove the 'label' property from the product
		const detailsOrder = details.map(({ label, ...rest} ) => {
			return rest;
		});;

		setOrder(order => ({
			...order,
			details: detailsOrder
		}));
	}

	//* Send the order
	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		console.log(order);
	}

	// TODO: Remove one product button

	return (
		<>
			<Header />

			<main className='w-full md:w-10/12 mx-auto mb-4'>
				<h1 className='text-xl md:text-2xl text-center'>
					New Order
				</h1>

				<form onSubmit={ onSubmit } className='mt-4'>
					<div className='w-full bg-green-700 shadow-md rounded-md px-4 py-2'>
						<h3 className='text-gray-100'>Select Client</h3>
					</div>

					<Select
						name='clients'
						options={ arrayCustomers }
						className='basic-multi-select mt-2'
						classNamePrefix='select'
						onChange={ onChangeCustomer }
					/>

					<div className='w-full bg-green-700 shadow-md rounded-md px-4 py-2 mt-8'>
						<h3 className='text-gray-100'>Select Products and Quantities</h3>
					</div>
					<section className='grid gap-8 grid-cols-12 mt-2'>
						<div className='col-span-12 md:col-span-6'>
							<MultiSelect
								name='products'
								options={ arrayProducts }
								onChange={ onChangeProducts }
							/>
						</div>

						<div className='col-span-12 md:col-span-6'>
							{
								details.map(({ product, quantity, label }) => (
									<div className='mb-2' key={ product }>
										<Number
											id={ product }
											name={ product }
											value={ quantity }
											min={ 1 }
											max={ 100 }
											product={ label }
											onChange={ onChangeQuantity }
										/>
									</div>
								))
							}
						</div>
					</section>

					{/* <div className='flex items-center justify-center mt-8'>
						<Button
							variant='primary'
							size='large'
							label='Create Order'
							type='submit'
							icon='fa-plus'
						/>
					</div> */}
					<div className='mt-4 col-span-12 flex flex-wrap gap-2 justify-end'>
						<LinkRouter
							isButton
							linkText='Cancel'
							linkTo='/orders'
							size='normal'
							variant='danger'
						/>

						<Button
							variant='primary'
							size='normal'
							label='Create Order'
							type='submit'
							icon='fa-plus'
							disabled={ !order.client || !details.length }
						/>
					</div>
				</form>
			</main>
		</>
	);
}

export default AddOrder;
