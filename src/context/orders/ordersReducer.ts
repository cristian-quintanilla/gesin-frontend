import {
	ActionType,
	GET_ORDERS,
	CANCEL_ORDER,
	DELIVER_ORDER,
	CLEAN_ORDERS,
} from '../../types';

import { OrdersInterface } from '../../interfaces';

const ordersReducer = (state: OrdersInterface, action: ActionType) => {
	const { type, payload } = action;

	switch (type) {
		case GET_ORDERS:
			return {
				...state,
				orders: payload.orders,
				totalPages: payload.totalPages,
			}
		case CANCEL_ORDER:
			return {
				...state,
				orders: state.orders.filter(order => order._id !== payload),
			}
		case DELIVER_ORDER:
			return {
				...state,
				orders: state.orders.map(order => order._id === payload ? { ...order, delivered: true } : order),
			}
		case CLEAN_ORDERS:
			return {
				...state,
				orders: [],
				totalPages: 0,
			}
		default:
			return state;
	}
}

export default ordersReducer;
