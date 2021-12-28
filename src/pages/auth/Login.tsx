import { useContext } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import Alert from '../../components/Alert';
import Button from '../../components/Button';
import Input from '../../components/Input';

import alertContext from '../../context/alert/alertContext';
import authContext from '../../context/auth/authContext';

const LoginPage = (): JSX.Element => {
	const AlertContext = useContext(alertContext);
	const AuthContext = useContext(authContext);

	const { msg, type, showAlert } = AlertContext;
	const { login, token } = AuthContext;

	//* Formik and Yup Validation
	const formik = useFormik({
		initialValues: {
			email: '',
			password: ''
		},
		validationSchema: Yup.object({
			email: Yup.string().required('Email is required.').email('Email is invalid.'),
			password: Yup.string().required('Password is required.').min(8, 'Password must be at least 8 characters.'),
		}),
		onSubmit: values => {
			// showAlert('Logged in successfully.', 'error');
			login(values);
		}
	});

	return (
		<div className='flex justify-center items-center h-screen bg-gray-600'>
			<div className='p-4 md:px-8 md:py-6 shadow-lg bg-white rounded w-9/12 md:w-1/2'>
				<h2 className='text-2xl md:text-4xl font-semibold text-center text-gray-700'>
					Gesin
				</h2>

				<h3 className='mt-2 text-base md:text-lg font-light text-center text-gray-600'>
					Welcome Back
				</h3>

				<div className='my-3'>
					{
						(msg && type)
						? <Alert message={ msg } type={ type } icon='fa-exclamation-triangle' />
						: null
					}
				</div>

				<form onSubmit={ formik.handleSubmit }>
					<div className='w-full mt-4'>
						<Input
							type='email'
							id='email'
							name='email'
							placeholder='Email'
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

					<div className='w-full mt-4'>
						<Input
							type='password'
							id='password'
							name='password'
							placeholder='Password'
							value={ formik.values.password }
							onChange={ formik.handleChange }
							onBlur={ formik.handleBlur }
						/>
						{
							formik.touched.password && formik.errors.password ? (
								<div className='w-full my-2'>
									<Alert
										type='error'
										icon='fa-exclamation-triangle'
										message={ formik.errors.password }
									/>
								</div>
							) : null
						}
					</div>

					<div className='flex items-center justify-end mt-4'>
						<Button
							variant='primary'
							size='normal'
							label='Login'
							type='submit'
							icon='fa-sign-in-alt'
						/>
					</div>
				</form>
			</div>
		</div>
	);
};

export default LoginPage;
