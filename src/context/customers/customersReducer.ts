import {
	ActionType,
	GET_CUSTOMERS,
	GET_CUSTOMER,
	ADD_CUSTOMER,
	DELETE_CUSTOMER,
	UPDATE_CUSTOMER,
} from '../../types';

import { CustomersInterface } from '../../interfaces';

const customersReducer = (state: CustomersInterface, action: ActionType) => {
	const { type, payload } = action;

	switch (type) {
		case GET_CUSTOMERS:
			return {
				...state,
				customers: payload,
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
			}
		case DELETE_CUSTOMER:
			return {
				...state,
				customers: state.customers.filter(customer => customer._id !== payload),
			}
		case UPDATE_CUSTOMER:
			return {
				...state,
				customers: state.customers.map(customer => customer._id === payload._id ? payload : customer),
				customer: null,
			}
		default:
			return state;
	}
}

export default customersReducer;
