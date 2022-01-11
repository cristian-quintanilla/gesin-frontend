import { ReactNode, useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { AxiosError } from 'axios';

import {
	ActionType,
	GET_ORDERS,
	CANCEL_ORDER,
	DELIVER_ORDER,
	ORDERS_ERROR,
	HIDE_ALERT
} from '../../types';

import clientAxios from '../../config/axios';
import ordersContext from './ordersContext';
import ordersReducer from './ordersReducer';

const OrdersState = ({ children }: { children: ReactNode }) => {
	const navigate = useNavigate();

	const initialState = {
		orders: [],
		totalPages: 0,
		message: null,
	}

	const [ state, dispatch ] = useReducer(ordersReducer, initialState);

	//* Get orders
	const getOrders = async (pagination: string) => {
		try {
			const { data } = await clientAxios.get(`/api/v1/orders${ pagination }`);

			dispatch({
				type: GET_ORDERS,
				payload: {
					orders: data.orders,
					totalPages: data.totalPages
				}
			});
		} catch (error) {
			const err = error as AxiosError;
			const msg = err.response?.data.msg || 'Error getting orders. Try again later or contact support.';
			const message = { msg, type: 'error' };

			dispatch({
				type: ORDERS_ERROR,
				payload: message
			});
		}
	}

	//* Cancel order
	const cancelOrder = async (id: string) => {
		console.log(id);
	}

	//* Deliver order
	const deliverOrder = async (id: string) => {
		console.log(id);
	}

	//* Hide alert
	const hideAlert = () => {
		dispatch({
			type: HIDE_ALERT,
		});
	}

	return (
		<ordersContext.Provider
			value={{
				orders: state.orders,
				message: state.message,
				totalPages: state.totalPages,
				getOrders,
				cancelOrder,
				deliverOrder,
				hideAlert
			}}
		>
			{ children }
		</ordersContext.Provider>
	);
}

export default OrdersState;
