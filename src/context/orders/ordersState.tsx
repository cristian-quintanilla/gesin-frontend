import { ReactNode, useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { AxiosError } from 'axios';

import {
	OrderType,
	GET_ORDERS,
	ADD_ORDER,
	CANCEL_ORDER,
	DELIVER_ORDER,
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

			toast.error(msg, { duration: 5000 });
		}
	}

	//* Cancel order
	const cancelOrder = async (id: string) => {
		try {
			const { data } = await clientAxios.put(`/api/v1/orders/cancel/${ id }`);

			dispatch({
				type: CANCEL_ORDER,
				payload: id
			});

			toast.success(data.msg, { duration: 5000 });
		} catch (error) {
			const err = error as AxiosError;
			const msg = err.response?.data.msg || 'Error canceling order. Try again later or contact support.';

			toast.error(msg, { duration: 5000 });
		}
	}

	//* Deliver order
	const deliverOrder = async (id: string) => {
		try {
			const { data } = await clientAxios.put(`/api/v1/orders/delivery/${ id }`);

			dispatch({
				type: DELIVER_ORDER,
				payload: id
			});

			toast.success(data.msg, { duration: 5000 });
		} catch (error) {
			const err = error as AxiosError;
			const msg = err.response?.data.msg || 'Error delivering order. Try again later or contact support.';

			toast.error(msg, { duration: 5000 });
		}
	}

	//* Create a new order
	const addOrder = async (order: OrderType) => {
		console.log(order);
	}

	return (
		<ordersContext.Provider
			value={{
				orders: state.orders,
				totalPages: state.totalPages,
				message: state.message,
				getOrders,
				addOrder,
				cancelOrder,
				deliverOrder,
			}}
		>
			{ children }
		</ordersContext.Provider>
	);
}

export default OrdersState;
