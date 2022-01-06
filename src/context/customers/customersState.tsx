import { ReactNode, useReducer } from 'react';
import  { AxiosError } from 'axios';

import {
	GET_CUSTOMERS,
	GET_CUSTOMER,
	ADD_CUSTOMER,
	DELETE_CUSTOMER,
	UPDATE_CUSTOMER,
	CUSTOMERS_ERROR,
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
		}catch (error) {
			const err = error as AxiosError;
			const msg = err.response?.data.msg || 'Error getting customers';
			const type = 'error';
			const message = { msg, type };

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
				getCustomers
			}}
		>
			{ children }
		</customersContext.Provider>
	);
}

export default CustomersState;
