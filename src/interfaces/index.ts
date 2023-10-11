//* Interfaces
export interface CustomerInterface {
	_id?: string;
	firstName: string;
	lastName: string;
	company: string
	email: string;
	address?: string;
	status?: boolean;
	phone?: string;
	__v?: number;
}

export interface DetailsInterface {
	_id: string;
	product: {
		_id: string;
		name: string;
		price: number;
	};
	quantity: number;
}

export interface MessageInterface {
	msg: string;
	type: 'success' | 'error' | 'default';
}

export interface NewOrderInterface {
	client: string;
	details: {
		product: string;
		quantity: number;
	}[];
}

export interface OrderInterface {
	_id: string;
	client: CustomerInterface;
	details: DetailsInterface[];
	total: number;
	delivered: boolean;
	updatedAt?: string;
}

export interface ProductInterface {
	_id?: string;
	name: string;
	stock: number;
	price: number;
	status?: boolean;
}

export interface UserInterface {
	_id: string;
	name: string;
	email: string;
	__v: string | number;
}

//* Interfaces for Providers
export interface AuthInterface {
	token: string | null;
	authenticated: boolean | null;
	message: MessageInterface | null;
	user: UserInterface | null;
	isLoading: boolean;
};

export interface AlertInterface {
	msg: string | null;
	type: 'success' | 'error' | 'default' | null;
};

export interface CustomersInterface {
	customers: CustomerInterface[];
	customer: CustomerInterface | null;
}

export interface OrdersInterface {
	orders: OrderInterface[];
	totalPages: number;
}

export interface ProductsInterface {
	products: ProductInterface[];
	product: ProductInterface | null;
};
