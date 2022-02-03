import { createContext } from 'react';

import { NewOrderInterface, OrdersInterface } from '../../interfaces';

interface OrdersContextInterface {
	ordersState: OrdersInterface;
	getOrders: (pagination: string) => void;
	addOrder: (order: NewOrderInterface) => void;
	cancelOrder: (id: string) => void;
	deliverOrder: (id: string) => void;
	cleanOrders: () => void;
}

const OrdersContext = createContext<OrdersContextInterface>({} as OrdersContextInterface);
export default OrdersContext;
