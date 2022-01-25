import { ReactNode, useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { AxiosError } from 'axios';

import {
	GET_ORDERS,
	CANCEL_ORDER,
	DELIVER_ORDER,
} from '../../types';

import OrdersContext from './OrdersContext';
import ordersReducer from './ordersReducer';
import { NewOrderInterface, OrdersInterface } from '../../interfaces/index';

import clientAxios from '../../config/axios';

interface CustonersProviderProps {
	children: JSX.Element | JSX.Element[];
}

const INITIAL_STATE: OrdersInterface = {
	orders: [],
	totalPages: 0,
}

const OrdersProvider = ({ children }: CustonersProviderProps) => {
	const navigate = useNavigate();
	const [ ordersState, dispatch ] = useReducer(ordersReducer, INITIAL_STATE);

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
			const { data } = await clientAxios.put(`/api/v1/orders/deliver/${ id }`);

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
	const addOrder = async (order: NewOrderInterface) => {
		try {
			const { data } = await clientAxios.post('/api/v1/orders/new', order);

			toast.success(data.msg, { duration: 5000 });
			navigate('/orders');
		} catch (error) {
			const err = error as AxiosError;
			let message: string = '';
			if (err.response?.data.errors) {
				const { errors } = err.response?.data;

				errors.forEach((error: { msg: string; }) => {
					message += `${ error.msg }\n`;
				});
			}

			toast.error(`${ message }`, { duration: 5000 });
		}
	}

	return (
		<OrdersContext.Provider
			value={{
				ordersState,
				getOrders,
				addOrder,
				cancelOrder,
				deliverOrder,
			}}
		>
			{ children }
		</OrdersContext.Provider>
	);
}

export default OrdersProvider;
