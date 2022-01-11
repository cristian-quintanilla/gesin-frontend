import {
  ActionType,
  GET_ORDERS,
  ORDERS_ERROR,
  HIDE_ALERT
} from '../../types';

import { OrderInterface } from './ordersContext';

const ordersReducer = (state: OrderInterface, action: ActionType) => {
  const{ type, payload } = action;

  switch (type) {
    case GET_ORDERS:
      return {
        ...state,
        orders: payload.orders,
        totalPages: payload.totalPages,
        message: null,
      }
    case HIDE_ALERT:
      return {
        ...state,
        message: null,
      }
    case ORDERS_ERROR:
      return {
				...state,
				message: payload,
			}
    default:
      return state;
  }
}

export default ordersReducer;
