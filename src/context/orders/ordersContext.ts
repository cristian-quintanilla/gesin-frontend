import { createContext } from 'react';

import { OrderType, MessageType } from '../../types';

export interface OrderInterface {
	orders: OrderType[];
	message: MessageType | null;
}

type ContextType = {
	orders: OrderType[];
	message: MessageType | null;
	getOrders: (pagination: string) => void;
}

const productsContext = createContext({} as ContextType);
export default productsContext;

