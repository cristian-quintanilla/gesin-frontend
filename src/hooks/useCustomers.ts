import { useContext } from 'react';

import CustomersContext from '../context/customers/CustomersContext';

export const useCustomers = () => {
  const {
    customersState, addCustomer, deleteCustomer, getCustomers, getCustomer, updateCustomer
  } = useContext(CustomersContext);

  const { customer, customers } = customersState;

  return {
    customer,
    customers,
    addCustomer,
    deleteCustomer,
    getCustomer,
    getCustomers,
    updateCustomer
  }
}
