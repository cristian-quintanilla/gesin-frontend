import {
	ActionType,
	GET_CUSTOMERS,
	GET_CUSTOMER,
	ADD_CUSTOMER,
	DELETE_CUSTOMER,
	UPDATE_CUSTOMER,
	CUSTOMERS_ERROR,
} from '../../types';

import { CustomerInterface } from './customersContext';

const customersReducer = (state: CustomerInterface, action: ActionType) => {
	const { type, payload } = action;

	switch (type) {
		case GET_CUSTOMERS:
			return {
				...state,
				customers: payload,
				message: null,
			};
		case GET_CUSTOMER:
			return {
				...state,
				customer: payload,
				message: null
			}
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
				message: null,
			}
		case UPDATE_CUSTOMER:
			return {
				...state,
				customers: state.customers.map(customer => customer._id === payload._id ? payload : customer),
				customer: null,
				message: null,
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
