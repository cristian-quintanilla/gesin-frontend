import { createContext } from 'react';

import { OrdersInterface } from '../../interfaces';
import { NewOrderType } from '../../types';

interface OrdersContextInterface {
	ordersState: OrdersInterface;
	getOrders: (pagination: string) => void;
	addOrder: (order: NewOrderType) => void;
	cancelOrder: (id: string) => void;
	deliverOrder: (id: string) => void;
}

const OrdersContext = createContext<OrdersContextInterface>({} as OrdersContextInterface);
export default OrdersContext;
