import { useParams } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import Alert from '../../components/Alert';
import Button from '../../components/Button';
import Header from '../../components/Header';
import Input from '../../components/Input';
import LinkRouter from '../../components/LinkRouter';

const EditProduct = (): JSX.Element => {
	const params = useParams();
	const { id } = params;

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
				.min(0, 'Min value for price is 0.')
				.integer('Stock must be an integer.'),
			price: Yup.number()
				.required('Product Price is required.')
				.typeError('You must specify a number.')
				.min(0, 'Min value for price is 0.')
		}),
		onSubmit: values => {
			const { stock } = values;
			console.log(Number(stock));
		}
	});

	return (
		<>
			<Header />

			<main className='w-full md:w-10/12 mx-auto mb-4'>
				<h1 className='text-xl md:text-2xl text-center'>
					Edit Product: { id }
				</h1>

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

export default EditProduct;
