import { ReactNode, useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { AxiosError } from 'axios';

import { ActionType, GET_ORDERS, HIDE_ALERT } from '../../types';

import clientAxios from '../../config/axios';
import ordersContext from './ordersContext';
import ordersReducer from './ordersReducer';

const OrdersState = ({ children }: { children: ReactNode }) => {
	const navigate = useNavigate();

	const initialState = {
		orders: [],
		message: null,
	}

	const [ state, dispatch ] = useReducer(ordersReducer, initialState);

  const getOrders = async (pagination: string) => {
    console.log('getOrders', pagination);
  }

  return (
    <ordersContext.Provider
      value={{
        orders: state.orders,
        message: state.message,
        getOrders,
      }}
    >
      { children }
    </ordersContext.Provider>
  );
}

export default OrdersState;
