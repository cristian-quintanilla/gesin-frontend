import { createContext } from 'react';

import { CustomerInterface, CustomersInterface } from '../../interfaces';

interface CustomersContextInterface {
	customersState: CustomersInterface;
	getCustomers: () => void;
	getCustomer: (_id: string) => void;
	addCustomer: (customer: CustomerInterface) => void;
	deleteCustomer: (_id: string) => void;
	updateCustomer: (customer: CustomerInterface) => void;
}

const CustomersContext = createContext<CustomersContextInterface>({} as CustomersContextInterface);
export default CustomersContext;
