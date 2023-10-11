import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';

//* Components
import Alert from '../../components/Alert';
import Button from '../../components/Button';
import Input from '../../components/Input';

//* Hooks
import { useAuth } from '../../hooks/useAuth';
import { useAlert } from '../../hooks/useAlert';

const LoginPage = (): JSX.Element => {
	const navigate = useNavigate();
	const { msg, type, showAlert } = useAlert();
	const { authenticated, isLoading, message, login } = useAuth();

	//* Verify if user is authenticated
	useEffect(() => {
		if (authenticated) {
			navigate(localStorage.getItem('last-path') || '/customers');
		}

		if (message) {
			showAlert(message.msg, message.type);
		}
	}, [authenticated, message]);

	//* Formik and Yup Validation
	const formik = useFormik({
		initialValues: {
			email: 'cristiancbtis130@gmail.com',
			password: '12345678'
		},
		validationSchema: Yup.object({
			email: Yup.string().required('Email is required.').email('Email is invalid.'),
			password: Yup.string().required('Password is required.').min(8, 'Password must be at least 8 characters.'),
		}),
		onSubmit: values => {
			login(values);
		}
	});

	return (
		<div className='flex justify-center items-center h-screen bg-gray-800'>
			<div className='p-6 md:px-8 md:py-6 shadow-lg bg-white rounded w-10/12 sm:w-8/12 md:w-2/5'>
				<h2 className='text-4xl font-semibold text-center text-gray-800'>
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
							icon={ isLoading ? 'fa-spinner fa-spin' : 'fa-sign-in-alt' }
							disabled={ isLoading }
						/>
					</div>
				</form>
			</div>
		</div>
	);
};

export default LoginPage;
