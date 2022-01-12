import { createContext } from 'react';

import { OrderType, MessageType } from '../../types';

export interface OrderInterface {
	orders: OrderType[];
	totalPages: number;
	message: MessageType | null;
}

type ContextType = {
	orders: OrderType[];
	totalPages: number;
	message: MessageType | null;
	getOrders: (pagination: string) => void;
	addOrder: (order: OrderType) => void;
	cancelOrder: (id: string) => void;
	deliverOrder: (id: string) => void;
}

const ordersContext = createContext({} as ContextType);
export default ordersContext;
