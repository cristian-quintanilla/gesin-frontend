import { useContext } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import Alert from '../../components/Alert';
import Button from '../../components/Button';
import Header from '../../components/Header';
import Input from '../../components/Input';
import LinkRouter from '../../components/LinkRouter';

import productsContext from '../../context/products/productsContext';

const AddProduct = (): JSX.Element => {
	const ProductsContext = useContext(productsContext);
	const { message, addProduct } = ProductsContext;

	//* Formik and Yup Validation
	const formik = useFormik({
		initialValues: {
			name: '',
			stock: '',
			price: '',
		},
		validationSchema: Yup.object({
			name: Yup.string().required('Product Name is required.'),
			stock: Yup.number()
				.required('Product Stock is required.')
				.typeError('You must specify a number.')
				.min(1, 'Min value for stock is 1.')
				.integer('Stock must be an integer.'),
			price: Yup.number()
				.required('Product Price is required.')
				.typeError('You must specify a number.')
				.min(1, 'Min value for price is 1.')
		}),
		onSubmit: async values => {
			const product = {
				name: values.name,
				stock: Number(values.stock),
				price: Number(values.price),
			}

			addProduct(product);
		}
	});

	return (
		<>
			<Header />

			<main className='w-full md:w-10/12 mx-auto mb-4'>
				<h1 className='text-xl md:text-2xl text-center'>
					Add Product
				</h1>

				{
					message && (
						<div className='w-full my-2'>
							<Alert
								type={ message.type }
								icon='fa-exclamation-triangle'
								message={ message.msg }
							/>
						</div>
					)
				}

				<form
					onSubmit={ formik.handleSubmit }
					className='grid gap-4 grid-cols-12 mx-4 mt-4 md:mt-6'
				>
					<div className='col-span-12'>
						<label className='block text-gray-700 mb-2' htmlFor='name'>
							Product Name:
						</label>
						<Input
							type='text'
							id='name'
							name='name'
							placeholder='Product Name'
							value={ formik.values.name }
							onChange={ formik.handleChange }
							onBlur={ formik.handleBlur }
						/>
						{
							formik.touched.name && formik.errors.name ? (
								<div className='w-full my-2'>
									<Alert
										type='error'
										icon='fa-exclamation-triangle'
										message={ formik.errors.name }
									/>
								</div>
							) : null
						}
					</div>

					<div className='col-span-12'>
						<label className='block text-gray-700 mb-2' htmlFor='stock'>
							Product Stock:
						</label>
						<Input
							type='text'
							id='stock'
							name='stock'
							placeholder='Product Stock'
							value={ formik.values.stock }
							onChange={ formik.handleChange }
							onBlur={ formik.handleBlur }
						/>
						{
							formik.touched.stock && formik.errors.stock ? (
								<div className='w-full my-2'>
									<Alert
										type='error'
										icon='fa-exclamation-triangle'
										message={ formik.errors.stock }
									/>
								</div>
							) : null
						}
					</div>

					<div className='col-span-12'>
						<label className='block text-gray-700 mb-2' htmlFor='price'>
							Product Price:
						</label>
						<Input
							type='text'
							id='price'
							name='price'
							placeholder='Product Price'
							value={ formik.values.price }
							onChange={ formik.handleChange }
							onBlur={ formik.handleBlur }
						/>
						{
							formik.touched.price && formik.errors.price ? (
								<div className='w-full my-2'>
									<Alert
										type='error'
										icon='fa-exclamation-triangle'
										message={ formik.errors.price }
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
							label='Add Product'
							type='submit'
							icon='fa-plus'
						/>
					</div>
				</form>
			</main>
		</>
	);
}

export default AddProduct;
