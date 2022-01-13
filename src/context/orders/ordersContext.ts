import { createContext } from 'react';

import { OrderType, NewOrderType } from '../../types';

export interface OrderInterface {
	orders: OrderType[];
	totalPages: number;
}

type ContextType = {
	orders: OrderType[];
	totalPages: number;
	getOrders: (pagination: string) => void;
	addOrder: (order: NewOrderType) => void;
	cancelOrder: (id: string) => void;
	deliverOrder: (id: string) => void;
}

const ordersContext = createContext({} as ContextType);
export default ordersContext;
