import { useContext } from 'react';

import OrdersContext from '../context/orders/OrdersContext';

export const useOrders = () => {
	const { ordersState, addOrder, cancelOrder, deliverOrder, getOrders } = useContext(OrdersContext);
	const { orders, totalPages } = ordersState;

	return {
		orders,
		totalPages,
		addOrder,
		cancelOrder,
		deliverOrder,
		getOrders
	}
}
