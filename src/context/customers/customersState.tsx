import { ReactNode, useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import  { AxiosError } from 'axios';

import {
	GET_CUSTOMERS,
	GET_CUSTOMER,
	ADD_CUSTOMER,
	DELETE_CUSTOMER,
	UPDATE_CUSTOMER,
	CUSTOMERS_ERROR,
	CustomerType,
} from '../../types';

import clientAxios from '../../config/axios';
import customersContext from './customersContext';
import customersReducer from './customersReducer';

const CustomersState = ({ children }: { children: ReactNode }) => {
	const navigate = useNavigate();

	const initialState = {
		customers: [],
		customer: null,
		message: null,
	}

	const [ state, dispatch ] = useReducer(customersReducer, initialState);

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
			const message = { msg, type: 'error' };

			dispatch({
				type: CUSTOMERS_ERROR,
				payload: message
			});
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
			const message = { msg, type: 'error' };

			dispatch({
				type: CUSTOMERS_ERROR,
				payload: message
			});
		}
	}

	//* Add customer
	const addCustomer = async (customer: CustomerType) => {
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
			const message = { msg, type: 'error' };

			dispatch({
				type: CUSTOMERS_ERROR,
				payload: message
			});
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
			const message = { msg, type: 'error' };

			dispatch({
				type: CUSTOMERS_ERROR,
				payload: message
			});
		}
	}

	//* Update customer
	const updateCustomer = async (customer: CustomerType) => {
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
			const message = { msg, type: 'error' };

			dispatch({
				type: CUSTOMERS_ERROR,
				payload: message
			});
		}
	}

	return (
		<customersContext.Provider
			value={{
				customers: state.customers,
				customer: state.customer,
				message: state.message,
				getCustomers,
				getCustomer,
				addCustomer,
				deleteCustomer,
				updateCustomer
			}}
		>
			{ children }
		</customersContext.Provider>
	);
}

export default CustomersState;
