import { createContext } from 'react';

import { CustomerType } from '../../types';
import { MessageType } from '../../types/index';

export interface CustomerInterface {
	customers: CustomerType[];
	message: MessageType | null;
}

type ContextType = {
	customers: CustomerType[];
	message: MessageType | null;
	getCustomers: () => void;
}

const customersContext = createContext({} as ContextType);
export default customersContext;