import { useFormik } from 'formik';
import * as Yup from 'yup';

import Alert from '../../components/Alert';
import Button from '../../components/Button';
import Header from '../../components/Header';
import Input from '../../components/Input';
import LinkRouter from '../../components/LinkRouter';

const EditProduct = (): JSX.Element => {
	//* Formik and Yup Validation
	const formik = useFormik({
		initialValues: {
			name: '',
			stock: '',
			price: '',
		},
		validationSchema: Yup.object({
			name: Yup.string().required('Name is required.'),
			stock: Yup.number().required('Stock is required.')
							.typeError('You must specify a number.')
							.min(0, 'Min value for stock is 0.'),
			price: Yup.number().required('Price is required.')
							.typeError('You must specify a number.')
							.min(0, 'Min value for price is 0.'),
		}),
		onSubmit: values => {
			console.log(values);
			// login(values);
		}
	});

	return (
		<>
			<h1>Edit Product</h1>
			{/* <Header />

			<main className='w-full md:w-10/12 mx-auto'>
				<h1 className='text-xl md:text-2xl font-medium md:font-normal text-center'>
					Add Product
				</h1>

				<form
					onSubmit={ formik.handleSubmit }
					className='grid gap-4 grid-cols-12 mx-4 mt-4 md:mt-6'
				>
					<div className='col-span-12'>
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
			</main> */}
		</>
	);
}

export default EditProduct;
