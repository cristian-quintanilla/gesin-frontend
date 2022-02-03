import { createContext } from 'react';

import { CustomerInterface, CustomersInterface } from '../../interfaces';

interface CustomersContextInterface {
	customersState: CustomersInterface;
	addCustomer: (customer: CustomerInterface) => void;
	cleanCustomer: () => void;
	cleanCustomers: () => void;
	deleteCustomer: (_id: string) => void;
	getCustomer: (_id: string) => void;
	getCustomers: () => void;
	updateCustomer: (customer: CustomerInterface) => void;
}

const CustomersContext = createContext<CustomersContextInterface>({} as CustomersContextInterface);
export default CustomersContext;
