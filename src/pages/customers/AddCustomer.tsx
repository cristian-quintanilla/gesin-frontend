import { useContext } from 'react';
import { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import Alert from '../../components/Alert';
import Button from '../../components/Button';
import Header from '../../components/Header';
import Input from '../../components/Input';
import LinkRouter from '../../components/LinkRouter';

import customersContext from '../../context/customers/customersContext';

const AddCustomer = (): JSX.Element => {

	const CustomersContext = useContext(customersContext);
	const { message, addCustomer } = CustomersContext;

	//* Formik and Yup Validation
	const formik = useFormik({
		initialValues: {
			firstName: '',
			lastName: '',
			company: '',
			email: '',
			address: '',
			phone: '',
		},
		validationSchema: Yup.object({
			firstName: Yup.string().required('First name is required.'),
			lastName: Yup.string().required('Last name is required.'),
			company: Yup.string().required('Company is required.'),
			email: Yup.string().required('Email is required.').email('Invalid email address.'),
		}),
		onSubmit: async values => {
			await addCustomer(values);
		}
	});

	return (
		<>
			<Header />

			<main className='w-full md:w-10/12 mx-auto mb-4'>
				<h1 className='text-xl md:text-2xl text-center'>
					Add Customer
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
					<div className='col-span-12 md:col-span-6'>
						<label className='block text-gray-700 mb-2' htmlFor='firstName'>
							First Name:
						</label>
						<Input
							type='text'
							id='firstName'
							name='firstName'
							placeholder='First Name'
							value={ formik.values.firstName }
							onChange={ formik.handleChange }
							onBlur={ formik.handleBlur }
						/>
						{
							formik.touched.firstName && formik.errors.firstName ? (
								<div className='w-full my-2'>
									<Alert
										type='error'
										icon='fa-exclamation-triangle'
										message={ formik.errors.firstName }
									/>
								</div>
							) : null
						}
					</div>

					<div className='col-span-12 md:col-span-6'>
						<label className='block text-gray-700 mb-2' htmlFor='lastName'>
							Last Name:
						</label>
						<Input
							type='text'
							id='lastName'
							name='lastName'
							placeholder='Last Name'
							value={ formik.values.lastName }
							onChange={ formik.handleChange }
							onBlur={ formik.handleBlur }
						/>
						{
							formik.touched.lastName && formik.errors.lastName ? (
								<div className='w-full my-2'>
									<Alert
										type='error'
										icon='fa-exclamation-triangle'
										message={ formik.errors.lastName }
									/>
								</div>
							) : null
						}
					</div>

					<div className='col-span-12'>
						<label className='block text-gray-700 mb-2' htmlFor='company'>
							Company:
						</label>
						<Input
							type='text'
							id='company'
							name='company'
							placeholder='Company'
							value={ formik.values.company }
							onChange={ formik.handleChange }
							onBlur={ formik.handleBlur }
						/>
						{
							formik.touched.company && formik.errors.company ? (
								<div className='w-full my-2'>
									<Alert
										type='error'
										icon='fa-exclamation-triangle'
										message={ formik.errors.company }
									/>
								</div>
							) : null
						}
					</div>

					<div className='col-span-12'>
						<label className='block text-gray-700 mb-2' htmlFor='email'>
							Email Address:
						</label>
						<Input
							type='email'
							id='email'
							name='email'
							placeholder='Email Address'
							value={ formik.values.email }
							onChange={ formik.handleChange }
							onBlur={ formik.handleBlur }
						/>
						{
							formik.touched.email && formik.errors.email ? (
								<div className='w-full my-2'>
									<Alert
										type='error'
										icon='fa-exclamation-triangle'
										message={ formik.errors.email }
									/>
								</div>
							) : null
						}
					</div>

					<div className='col-span-12'>
						<label className='block text-gray-700 mb-2' htmlFor='address'>
							Address:
						</label>
						<Input
							type='text'
							id='address'
							name='address'
							placeholder='Address'
							value={ formik.values.address }
							onChange={ formik.handleChange }
							onBlur={ formik.handleBlur }
						/>
					</div>

					<div className='col-span-12'>
						<label className='block text-gray-700 mb-2' htmlFor='phone'>
							Phone Number:
						</label>
						<Input
							type='text'
							id='phone'
							name='phone'
							placeholder='Phone Number'
							value={ formik.values.phone }
							onChange={ formik.handleChange }
							onBlur={ formik.handleBlur }
						/>
					</div>

					<div className='mt-4 col-span-12 flex flex-wrap gap-2 justify-end'>
						<LinkRouter
							isButton
							linkText='Cancel'
							linkTo='/customers'
							size='normal'
							variant='danger'
						/>

						<Button
							variant='primary'
							size='normal'
							label='Add Customer'
							type='submit'
							icon='fa-plus'
						/>
					</div>
				</form>
			</main>
		</>
	);
}

export default AddCustomer;
