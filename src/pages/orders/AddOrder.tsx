import { useContext, useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import Select, { OnChangeValue, SingleValue } from 'react-select';

//* Components
import Button from '../../components/Button';
import Header from '../../components/Header';
import LinkRouter from '../../components/LinkRouter';
import MultiSelect from '../../components/MultiSelect';
import Number from '../../components/Number';

//* Hooks
import customersContext from '../../context/customers/customersContext';
import ordersContext from '../../context/orders/ordersContext';
import { useProducts } from '../../hooks/useProducts';

type SelectedOption = {
	value: string;
	label: string;
	price?: number;
}

type Details = {
	product: string;
	label: string;
	quantity: number;
	price: number;
}

const AddOrder = (): JSX.Element => {
	const { customers, getCustomers } = useContext(customersContext);
	const { addOrder } = useContext(ordersContext);
	const { products, getProducts } = useProducts();

	const [ customersList, setCustomersList ] = useState<SelectedOption[]>([]);
	const [ client, setClient ] = useState<string>('');
	const [ details, setDetails ] = useState<Details[]>([]);
	const [ productsList, setProductsList ] = useState<SelectedOption[]>([]);
	const [ total, setTotal ] = useState<number>(0);

	//* Get customers and products
	useEffect(() => {
		getCustomers();
		getProducts();
	}, []);

	//* Set customers and products arrays
	useEffect(() => {
		const customersArray: SelectedOption[] = customers.map(({ _id, firstName, lastName }) => ({
			value: `${ _id }`,
			label: `${ firstName } ${ lastName }`,
		}));

		const productsArray: SelectedOption[] = products.map(({ _id, name, stock, price }) => ({
			value: `${ _id }`,
			label: `${ name } ($${ price }) - ${ stock }`,
			price,
		}));

		setCustomersList(customersArray);
		setProductsList(productsArray);
	}, [customers, products]);

	//* Update total
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
				price: productsList.find(({ value: product }) => product === value)?.price || 0
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

		//* Remove the 'label' and 'price' properties from details
		const detailsOrder = details.map(({ label, price, ...rest} ) => {
			return rest;
		});

		const order = { client, details: detailsOrder }
		addOrder(order);
	}

	return (
		<>
			<Header />

			<main className='w-full md:w-10/12 mx-auto mb-4'>
				<h1 className='text-xl md:text-2xl text-center'>
					New Order
				</h1>

				<form onSubmit={ onSubmit } className='py-4 mt-4 mx-8 px-4 shadow-md shadow-blue-300 rounded'>
					<div className='w-full bg-green-700 shadow-md rounded-md px-4 py-2'>
						<h3 className='text-gray-100'>Select Customer</h3>
					</div>

					<Select
						name='customers'
						options={ customersList }
						className='basic-multi-select mt-2'
						classNamePrefix='select'
						onChange={ onChangeCustomer }
						placeholder='Select a customer'
					/>

					<div className='w-full bg-green-700 shadow-md rounded-md px-4 py-2 mt-8'>
						<h3 className='text-gray-100'>Select Products and Quantities</h3>
					</div>
					<section className='grid gap-y-4 grid-cols-12 mt-2'>
						<div className='col-span-12'>
							<MultiSelect
								name='products'
								options={ productsList }
								onChange={ onChangeProducts }
								placeholder='Select product(s)'
							/>
						</div>

						<div className='col-span-12'>
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

					<section className='w-full bg-green-100/50 shadow-md shadow-green-300 rounded-md px-4 py-3 mt-8'>
						<h2 className='text-lg md:text-xl font-medium text-green-700'>
							{
								!isNaN(total) ? <>Total: ${ total.toFixed(2) }</> : <>Calculando Total...</>
							}
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

			{/* Toast */}
			<Toaster
				position='top-right'
				reverseOrder={ false }
			/>
		</>
	);
}

export default AddOrder;
