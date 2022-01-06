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
		default:
			return state;
	}
}

export default customersReducer;
