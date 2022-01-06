import { ReactNode, useReducer } from 'react';
import  { AxiosError } from 'axios';
import toast from 'react-hot-toast';

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
	const initialState = {
		customers: [],
		message: null,
	}

	const [ state, dispatch ] = useReducer(customersReducer, initialState);

	//* Get customers
	const getCustomers = async () => {
		try{
			const result = await clientAxios.get('/api/v1/customers');

			dispatch({
				type: GET_CUSTOMERS,
				payload: result.data.customers
			});
		} catch (error) {
			const err = error as AxiosError;
			const msg = err.response?.data.msg || 'Error getting customers. Try again later or contact support.';
			const type = 'error';
			const message = { msg, type };

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

			toast.success(data.msg);

			dispatch({
				type: ADD_CUSTOMER,
				payload: customer
			});
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

	return (
		<customersContext.Provider
			value={{
				customers: state.customers,
				message: state.message,
				getCustomers,
				addCustomer
			}}
		>
			{ children }
		</customersContext.Provider>
	);
}

export default CustomersState;
