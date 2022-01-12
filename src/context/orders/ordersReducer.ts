import {
	ActionType,
	GET_ORDERS,
	CANCEL_ORDER,
	DELIVER_ORDER,
	ORDERS_ERROR,
} from '../../types';

import { OrderInterface } from './ordersContext';

const ordersReducer = (state: OrderInterface, action: ActionType) => {
	const { type, payload } = action;

	switch (type) {
		case GET_ORDERS:
			return {
				...state,
				orders: payload.orders,
				totalPages: payload.totalPages,
				message: null,
			}
		case CANCEL_ORDER:
			return {
				...state,
				orders: state.orders.filter(order => order._id !== payload),
				message: null,
			}
		case DELIVER_ORDER:
			return {
				...state,
				orders: state.orders.map(order => order._id === payload ? { ...order, delivered: true } : order),
				message: null,
			}
		case ORDERS_ERROR:
			return {
				...state,
				message: payload,
			}
		default:
			return state;
	}
}

export default ordersReducer;
