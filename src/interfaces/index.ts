import { CustomerType, MessageType, OrderType, ProductType, UserType } from '../types';

export interface AuthInterface {
	token: string | null;
	authenticated: boolean | null;
	message: MessageType | null;
	user: UserType | null;
};

export interface AlertInterface {
	msg: string | null;
	type: 'success' | 'error' | 'default' | null;
};

export interface CustomersInterface {
	customers: CustomerType[];
	customer: CustomerType | null;
}

export interface OrdersInterface {
	orders: OrderType[];
	totalPages: number;
}

export interface ProductsInterface {
	products: ProductType[];
	product: ProductType | null;
};
