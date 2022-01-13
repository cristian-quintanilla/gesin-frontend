import {
	ActionType,
	GET_ORDERS,
	CANCEL_ORDER,
	DELIVER_ORDER,
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
		default:
			return state;
	}
}

export default ordersReducer;
