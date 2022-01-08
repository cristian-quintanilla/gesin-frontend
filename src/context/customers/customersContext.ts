import { createContext } from 'react';

import { CustomerType, MessageType } from '../../types';

export interface CustomerInterface {
	customers: CustomerType[];
	customer: CustomerType | null;
	message: MessageType | null;
}

type ContextType = {
	customers: CustomerType[];
	customer: CustomerType | null;
	message: MessageType | null;
	getCustomers: () => void;
	getCustomer: (_id: string) => void;
	addCustomer: (customer: CustomerType) => void;
	deleteCustomer: (_id: string) => void;
	updateCustomer: (customer: CustomerType) => void;
}

const customersContext = createContext({} as ContextType);
export default customersContext;
