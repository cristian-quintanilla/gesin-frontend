import { useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import { AxiosError } from 'axios';
import toast from 'react-hot-toast';

import {
	ADD_CUSTOMER,
	CLEAN_CUSTOMER,
	CLEAN_CUSTOMERS,
	DELETE_CUSTOMER,
	GET_CUSTOMER,
	GET_CUSTOMERS,
	UPDATE_CUSTOMER,
} from '../../types';

import CustomersContext from './CustomersContext';
import customersReducer from './customersReducer';
import { CustomerInterface, CustomersInterface } from '../../interfaces/index';

import clientAxios from '../../config/axios';

interface CustomersProviderProps {
	children: JSX.Element | JSX.Element[];
}

const INITIAL_STATE: CustomersInterface = {
	customer: null,
	customers: [],
}

const CustomersProvider = ({ children }: CustomersProviderProps) => {
	const navigate = useNavigate();
	const [ customersState, dispatch ] = useReducer(customersReducer, INITIAL_STATE);

	//* Get customers
	const getCustomers = async () => {
		try{
			const { data } = await clientAxios.get('/api/v1/customers');

			dispatch({
				type: GET_CUSTOMERS,
				payload: data.customers
			});
		} catch (error) {
			const err = error as AxiosError;
			const msg = err.response?.data.msg || 'Error getting customers. Try again later or contact support.';

			toast.error(msg, { duration: 5000 });
		}
	}

	//* Get customer
	const getCustomer = async (_id: string) => {
		try{
			const { data } = await clientAxios.get(`/api/v1/customers/${ _id }`);

			dispatch({
				type: GET_CUSTOMER,
				payload: data.customer
			});
		} catch (error) {
			const err = error as AxiosError;
			const msg = err.response?.data.msg || 'Error getting customer. Try again later or contact support.';

			toast.error(msg, { duration: 5000 });
		}
	}

	//* Add customer
	const addCustomer = async (customer: CustomerInterface) => {
		try{
			const { data } = await clientAxios.post('/api/v1/customers/create', customer);

			dispatch({
				type: ADD_CUSTOMER,
				payload: data.customer
			});

			toast.success(data.msg, { duration: 5000 });
			navigate('/customers');
		} catch (error) {
			const err = error as AxiosError;
			const msg = err.response?.data.msg || 'Error adding customer. Try again later or contact support.';

			toast.error(msg, { duration: 5000 });
		}
	}

	//* Delete customer
	const deleteCustomer = async (_id: string) => {
		try {
			const { data } = await clientAxios.delete(`/api/v1/customers/delete/${ _id }`);

			dispatch({
				type: DELETE_CUSTOMER,
				payload: _id
			});

			toast.success(data.msg, { duration: 5000 });
		} catch (error) {
			const err = error as AxiosError;
			const msg = err.response?.data.msg || 'Error deleting customer. Try again later or contact support.';

			toast.error(msg, { duration: 5000 });
		}
	}

	//* Update customer
	const updateCustomer = async (customer: CustomerInterface) => {
		try{
			const { _id, ...customerData } = customer;
			const { data } = await clientAxios.put(`/api/v1/customers/edit/${ _id }`, customerData);

			dispatch({
				type: UPDATE_CUSTOMER,
				payload: data.customer
			});

			toast.success(data.msg, { duration: 5000 });
			navigate('/customers');
		} catch (error) {
			const err = error as AxiosError;
			const msg = err.response?.data.msg || 'Error updating customer. Try again later or contact support.';

			toast.error(msg, { duration: 5000 });
		}
	}

	//* Clean customer
	const cleanCustomer = () => {
		dispatch({ type: CLEAN_CUSTOMER });
	}

	//* Clean Customers
	const cleanCustomers = () => {
		dispatch({ type: CLEAN_CUSTOMERS });
	}

	return (
		<CustomersContext.Provider
			value={{
				customersState,
				addCustomer,
				cleanCustomer,
				cleanCustomers,
				deleteCustomer,
				getCustomer,
				getCustomers,
				updateCustomer,
			}}
		>
			{ children }
		</CustomersContext.Provider>
	);
}

export default CustomersProvider;
