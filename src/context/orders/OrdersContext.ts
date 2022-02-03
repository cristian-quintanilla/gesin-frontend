import { createContext } from 'react';

import { NewOrderInterface, OrdersInterface } from '../../interfaces';

interface OrdersContextInterface {
	ordersState: OrdersInterface;
	addOrder: (order: NewOrderInterface) => void;
	cancelOrder: (id: string) => void;
	cleanOrders: () => void;
	deliverOrder: (id: string) => void;
	getOrders: (pagination: string) => void;
}

const OrdersContext = createContext<OrdersContextInterface>({} as OrdersContextInterface);
export default OrdersContext;
