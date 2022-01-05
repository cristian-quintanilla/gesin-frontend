import { useState, useEffect } from 'react';
import Select, { OnChangeValue, SingleValue } from 'react-select';

import Button from '../../components/Button';
import Header from '../../components/Header';
import LinkRouter from '../../components/LinkRouter';
import MultiSelect from '../../components/MultiSelect';
import Number from '../../components/Number';

type SelectedOption = {
	value: string;
	label: string;
	price?: number;
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
		price: 100,
	},
	{
		value: 'product2',
		label: 'Celular',
		price: 200,
	},
	{
		value: 'product3',
		label: 'Cámara',
		price: 300,
	},
	{
		value: 'product4',
		label: 'Laptop HP 15',
		price: 1500,
	}
];

const AddOrder = (): JSX.Element => {
	const [ details, setDetails ] = useState<{
		product: string;
		label: string;
		quantity: number;
		price: number;
	}[]>([]);

	const [ client, setClient ] = useState<string>('');
	const [ total, setTotal ] = useState<number>(0);

	useEffect(() => {
		const total = details.reduce((acc, { price, quantity }) => acc + price * quantity, 0);
		setTotal(total);
	}, [details]);

	//* Add client to the order
	const onChangeCustomer = (values: SingleValue<SelectedOption>) => {
		setClient(values?.value || '');
	}

	//* Add product to the order
	const onChangeProducts = (values: OnChangeValue<SelectedOption, true>) => {
		if (values) {
			setDetails(values.map(({ value, label }) => ({
				product: value,
				quantity: 1,
				label,
				price: arrayProducts.find(({ value: product }) => product === value)?.price || 0
			})));
		}
	}

	//* Change quantity of the product
	const onChangeQuantity = (e: React.ChangeEvent<HTMLInputElement>) => {
		if ( e.target.valueAsNumber > 100 && e.target.valueAsNumber <= 0 && !isNaN(e.target.valueAsNumber) ) return;

		setDetails(details => details.map(detail => {
			if (detail.product === e.target.name) {
				return {
					...detail,
					quantity: e.target.valueAsNumber,
				}
			}

			return detail;
		}));
	}

	//* Send the order
	const onSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
		e.preventDefault();

		//* Remove the 'label' property from the product
		const detailsOrder = details.map(({ label, price, ...rest} ) => {
			return rest;
		});

		const order = { client, details: detailsOrder }
		console.log(order);
	}

	return (
		<>
			<Header />

			<main className='w-full md:w-10/12 mx-auto mb-4'>
				<h1 className='text-xl md:text-2xl text-center'>
					New Order
				</h1>

				<form onSubmit={ onSubmit } className='mt-4 px-4'>
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

					<section className='w-full bg-gray-100 shadow-md rounded-md px-4 py-2 mt-8'>
						<h2 className='text-lg md:text-xl font-medium text-green-700'>
							Total: ${ total }
						</h2>
					</section>

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
							disabled={ !client || !details.length }
						/>
					</div>
				</form>
			</main>
		</>
	);
}

export default AddOrder;
