import { createContext } from 'react';

import { CustomerType, MessageType } from '../../types';

export interface CustomerInterface {
	customers: CustomerType[];
	message: MessageType | null;
}

type ContextType = {
	customers: CustomerType[];
	message: MessageType | null;
	getCustomers: () => void;
	addCustomer: (customer: CustomerType) => void;
	deleteCustomer: (_id: string) => void;
	updateCustomer: (customer: CustomerType) => void;
}

const customersContext = createContext({} as ContextType);
export default customersContext;
