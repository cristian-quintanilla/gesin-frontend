import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';

//* Components
import Alert from '../../components/Alert';
import Button from '../../components/Button';
import Header from '../../components/Header';
import LinkRouter from '../../components/LinkRouter';

//* Hooks and Interfaces
import { ProductInterface } from '../../interfaces';
import { useProducts } from '../../hooks/useProducts';

const INITIAL_VALUES = {
	name: '',
	stock: 0,
	price: 0,
}

const EditProduct = (): JSX.Element => {
	const { product, getProduct, updateProduct } = useProducts();
	const params = useParams();

	const validationSchema = Yup.object().shape({
		name: Yup.string().required('Product Name is required.'),
		stock: Yup.number().required('Product Stock is required.')
			.typeError('You must specify a number.')
			.min(0, 'Min value for price is 0.')
			.integer('Stock must be an integer.'),
		price: Yup.number().required('Product Price is required.')
			.typeError('You must specify a number.')
			.min(0, 'Min value for price is 0.')
	});

	const onSubmit = (fields: ProductInterface) => {
		const product: ProductInterface = {
			_id: params.id as string,
			name: fields.name,
			stock: Number(fields.stock),
			price: Number(fields.price),
		}

		updateProduct(product);
	}

	return (
		<>
			<Header />

			<main className='animate__animated animate__fadeIn w-full md:w-10/12 mx-auto mb-4'>
				{
					product && (
						<h1 className='text-xl md:text-2xl text-center'>
							Edit Product: { product?.name }
						</h1>
					)
				}

				<Formik
					initialValues={ INITIAL_VALUES }
					validationSchema={ validationSchema }
					onSubmit={ onSubmit }
				>
					{
						({ errors, touched, setFieldValue }) => {
							useEffect(() => {
								getProduct(params.id as string);
							}, []);

							useEffect(() => {
								if (product) {
									setFieldValue('name', product.name, false);
									setFieldValue('stock', product.stock, false);
									setFieldValue('price', product.price, false);
								}
							}, [product]);

							if (product) {
								return (
									<Form className='grid gap-4 grid-cols-12 mx-4 mt-4 md:mt-6'>
										<div className='col-span-12'>
											<label className='block text-gray-700 mb-2' htmlFor='name'>
												Product Name:
											</label>

											<Field
												type='text'
												name='name'
												className='w-full rounded border-2 border-gray-300 focus:border-blue-600 outline-none text-gray-700 py-2 px-3 duration-200 ease-in-out'
												autoComplete='off'
												placeholder='Name'
											/>
											{
												touched.name && errors.name ? (
													<div className='w-full my-2'>
														<Alert
															type='error'
															icon='fa-exclamation-triangle'
															message={ errors.name }
														/>
													</div>
												) : null
											}
										</div>

										<div className='col-span-12'>
											<label className='block text-gray-700 mb-2' htmlFor='stock'>
												Product Stock:
											</label>

											<Field
												type='text'
												name='stock'
												className='w-full rounded border-2 border-gray-300 focus:border-blue-600 outline-none text-gray-700 py-2 px-3 duration-200 ease-in-out'
												autoComplete='off'
												placeholder='Product Stock'
											/>
											{
												touched.stock && errors.stock ? (
													<div className='w-full my-2'>
														<Alert
															type='error'
															icon='fa-exclamation-triangle'
															message={ errors.stock }
														/>
													</div>
												) : null
											}
										</div>

										<div className='col-span-12'>
											<label className='block text-gray-700 mb-2' htmlFor='price'>
												Product Price:
											</label>

											<Field
												type='text'
												name='price'
												className='w-full rounded border-2 border-gray-300 focus:border-blue-600 outline-none text-gray-700 py-2 px-3 duration-200 ease-in-out'
												autoComplete='off'
												placeholder='Product Price'
											/>
											{
												touched.price && errors.price ? (
													<div className='w-full my-2'>
														<Alert
															type='error'
															icon='fa-exclamation-triangle'
															message={ errors.price }
														/>
													</div>
												) : null
											}
										</div>

										<div className='mt-4 col-span-12 flex flex-wrap gap-2 justify-end'>
											<LinkRouter
												isButton
												linkText='Cancel'
												linkTo='/products'
												size='normal'
												variant='danger'
											/>

											<Button
												variant='primary'
												size='normal'
												label='Edit Product'
												type='submit'
												icon='fa-edit'
											/>
										</div>
									</Form>
								);
							}
						}
					}
				</Formik>
			</main>

			{/* Toast */}
			<Toaster
				position='top-right'
				reverseOrder={false}
			/>
		</>
	);
}

export default EditProduct;
