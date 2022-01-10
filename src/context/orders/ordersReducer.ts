import { ActionType, GET_ORDERS, HIDE_ALERT } from '../../types';

import { OrderInterface } from './ordersContext';

const ordersReducer = (state: OrderInterface, action: ActionType) => {
  const{ type, payload } = action;

  switch (type) {
    case GET_ORDERS:
      return {
        ...state,
        orders: payload,
        message: null,
      }
    case HIDE_ALERT:
      return {
        ...state,
        message: null,
      }
    default:
      return state;
  }
}

export default ordersReducer;
