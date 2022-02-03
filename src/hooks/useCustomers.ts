import { useContext } from 'react';

import CustomersContext from '../context/customers/CustomersContext';

export const useCustomers = () => {
  const {
    customersState,
    addCustomer,
    cleanCustomer,
    cleanCustomers,
    deleteCustomer,
    getCustomer,
    getCustomers,
    updateCustomer,
  } = useContext(CustomersContext);

  const { customer, customers } = customersState;

  return {
    customer,
    customers,
    addCustomer,
    cleanCustomer,
    cleanCustomers,
    deleteCustomer,
    getCustomer,
    getCustomers,
    updateCustomer,
  }
}
