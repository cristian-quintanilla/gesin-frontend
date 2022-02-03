import {
	ActionType,
	ADD_CUSTOMER,
	CLEAN_CUSTOMER,
	CLEAN_CUSTOMERS,
	DELETE_CUSTOMER,
	GET_CUSTOMER,
	GET_CUSTOMERS,
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
		case CLEAN_CUSTOMERS:
			return {
				...state,
				customers: [],
			}
		case CLEAN_CUSTOMER:
			return {
				...state,
				customer: null,
			}
		default:
			return state;
	}
}

export default customersReducer;
