import {
	GET_CUSTOMERS,
	GET_CUSTOMER,
	ADD_CUSTOMER,
	DELETE_CUSTOMER,
	UPDATE_CUSTOMER,
	CUSTOMERS_ERROR,
} from '../../types';

import { CustomerInterface } from './customersContext';
import { ActionType } from '../../types';

const customersReducer = (state: CustomerInterface, action: ActionType) => {
	const { type, payload } = action;

	switch (type) {
		case GET_CUSTOMERS:
			return {
				...state,
				customers: payload,
				message: null,
			};
		case ADD_CUSTOMER:
			return {
				...state,
				customers: [ ...state.customers, payload ],
				message: null,
			}
		case DELETE_CUSTOMER:
			return {
				...state,
				customers: state.customers.filter(customer => customer._id !== payload),
				message: null
			}
		case CUSTOMERS_ERROR:
			return {
				...state,
				message: payload,
			}
		default:
			return state;
	}
}

export default customersReducer;
