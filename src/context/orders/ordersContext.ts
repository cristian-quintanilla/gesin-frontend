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
	hideAlert: () => void;
}

const productsContext = createContext({} as ContextType);
export default productsContext;

