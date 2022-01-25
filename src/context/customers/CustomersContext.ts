import { createContext } from 'react';

import { CustomersInterface } from '../../interfaces';
import { CustomerType } from '../../types';

interface CustomersContextInterface {
	customersState: CustomersInterface;
	getCustomers: () => void;
	getCustomer: (_id: string) => void;
	addCustomer: (customer: CustomerType) => void;
	deleteCustomer: (_id: string) => void;
	updateCustomer: (customer: CustomerType) => void;
}

const CustomersContext = createContext<CustomersContextInterface>({} as CustomersContextInterface);
export default CustomersContext;
