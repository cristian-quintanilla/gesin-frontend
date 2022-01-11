import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';

import Alert from '../../components/Alert';
import Button from '../../components/Button';
import Header from '../../components/Header';
import LinkRouter from '../../components/LinkRouter';

import customersContext from '../../context/customers/customersContext';
import { CustomerType } from '../../types';

const EditCustomer = (): JSX.Element => {
	const params = useParams();

	const CustomerContext = useContext(customersContext);
	const { customer, getCustomer, updateCustomer } = CustomerContext;

	const initialValues = {
		firstName: '',
		lastName: '',
		company: '',
		email: '',
		address: '',
		phone: '',
	};

	const validationSchema = Yup.object().shape({
		firstName: Yup.string().required('First name is required.'),
		lastName: Yup.string().required('Last name is required.'),
		company: Yup.string().required('Company is required.'),
		email: Yup.string().required('Email is required.').email('Invalid email address.'),
	});

	const onSubmit = (fields: CustomerType) => {
		const customer: CustomerType = { _id: params.id as string, ...fields };
		updateCustomer(customer);
	}

	return (
		<>
			<Header />

			<main className='animate__animated animate__fadeIn w-full md:w-10/12 mx-auto mb-4'>
				{
					customer && (
						<h1 className='text-xl md:text-2xl text-center'>
							Edit Customer: { `${ customer?.firstName  } ${ customer?.lastName }` }
						</h1>
					)
				}

				<Formik
					initialValues={ initialValues }
					validationSchema={ validationSchema }
					onSubmit={ onSubmit }
				>
					{
						({ errors, touched, setFieldValue }) => {
							useEffect(() => {
								getCustomer(params.id as string);
							}, []);

							useEffect(() => {
								if (customer) {
									setFieldValue('firstName', customer.firstName, false);
									setFieldValue('lastName', customer.lastName, false);
									setFieldValue('company', customer.company, false);
									setFieldValue('email', customer.email, false);
									setFieldValue('address', customer.address, false);
									setFieldValue('phone', customer.phone, false);
								}
							}, [customer]);

							if (customer) {
								return (
									<Form className='grid gap-4 grid-cols-12 mx-4 mt-4 md:mt-6'>
										<div className='col-span-12 md:col-span-6'>
											<label className='block text-gray-700 mb-2' htmlFor='firstName'>
												First Name:
											</label>

											<Field
												type='text'
												name='firstName'
												className='w-full rounded border-2 border-gray-300 focus:border-blue-600 outline-none text-gray-700 py-2 px-3 duration-200 ease-in-out'
												autoComplete='off'
												placeholder='First Name'
											/>
											{
												touched.firstName && errors.firstName ? (
													<div className='w-full my-2'>
														<Alert
															type='error'
															icon='fa-exclamation-triangle'
															message={ errors.firstName }
														/>
													</div>
												) : null
											}
										</div>

										<div className='col-span-12 md:col-span-6'>
											<label className='block text-gray-700 mb-2' htmlFor='lastName'>
												Last Name:
											</label>

											<Field
												type='text'
												name='lastName'
												className='w-full rounded border-2 border-gray-300 focus:border-blue-600 outline-none text-gray-700 py-2 px-3 duration-200 ease-in-out'
												autoComplete='off'
												placeholder='Last Name'
											/>
											{
												touched.lastName && errors.lastName ? (
													<div className='w-full my-2'>
														<Alert
															type='error'
															icon='fa-exclamation-triangle'
															message={ errors.lastName }
														/>
													</div>
												) : null
											}
										</div>

										<div className='col-span-12'>
											<label className='block text-gray-700 mb-2' htmlFor='company'>
												Company:
											</label>

											<Field
												type='text'
												name='company'
												className='w-full rounded border-2 border-gray-300 focus:border-blue-600 outline-none text-gray-700 py-2 px-3 duration-200 ease-in-out'
												autoComplete='off'
												placeholder='Company'
											/>
											{
												touched.company && errors.company ? (
													<div className='w-full my-2'>
														<Alert
															type='error'
															icon='fa-exclamation-triangle'
															message={ errors.company }
														/>
													</div>
												) : null
											}
										</div>

										<div className='col-span-12'>
											<label className='block text-gray-700 mb-2' htmlFor='email'>
												Email Address:
											</label>

											<Field
												type='email'
												name='email'
												className='w-full rounded border-2 border-gray-300 focus:border-blue-600 outline-none text-gray-700 py-2 px-3 duration-200 ease-in-out'
												autoComplete='off'
												placeholder='Email Address'
											/>
											{
												touched.email && errors.email ? (
													<div className='w-full my-2'>
														<Alert
															type='error'
															icon='fa-exclamation-triangle'
															message={ errors.email }
														/>
													</div>
												) : null
											}
										</div>

										<div className='col-span-12'>
											<label className='block text-gray-700 mb-2' htmlFor='address'>
												Address:
											</label>

											<Field
												type='text'
												name='address'
												className='w-full rounded border-2 border-gray-300 focus:border-blue-600 outline-none text-gray-700 py-2 px-3 duration-200 ease-in-out'
												autoComplete='off'
												placeholder='Address'
											/>
										</div>

										<div className='col-span-12'>
											<label className='block text-gray-700 mb-2' htmlFor='phone'>
												Phone Number:
											</label>

											<Field
												type='text'
												name='phone'
												className='w-full rounded border-2 border-gray-300 focus:border-blue-600 outline-none text-gray-700 py-2 px-3 duration-200 ease-in-out'
												autoComplete='off'
												placeholder='Phone Number'
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
												label='Edit Customer'
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

export default EditCustomer;
