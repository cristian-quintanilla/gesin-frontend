import {
	ActionType,
	GET_PRODUCTS,
	GET_PRODUCT,
	ADD_PRODUCT,
	DELETE_PRODUCT,
	UPDATE_PRODUCT,
	CLEAN_PRODUCTS
} from '../../types';

import { ProductsInterface } from '../../interfaces';

const productsReducer = (state: ProductsInterface, action: ActionType) => {
	const { type, payload } = action;

	switch (type) {
		case GET_PRODUCTS:
			return {
				...state,
				products: payload,
				message: null,
			};
		case GET_PRODUCT:
			return {
				...state,
				product: payload,
				message: null,
			}
		case ADD_PRODUCT:
		  return {
		    ...state,
		    products: [ ...state.products, payload ],
		    message: null,
		  }
		case DELETE_PRODUCT:
		  return {
		    ...state,
		    products: state.products.filter(product => product._id !== payload),
		    message: null,
		  }
		case UPDATE_PRODUCT:
		  return {
		    ...state,
		    products: state.products.map(product => product._id === payload._id ? payload : product),
		    message: null,
				product: null,
		  }
		case CLEAN_PRODUCTS:
			return {
				...state,
				products: [],
			}
		default:
			return state;
	}
}

export default productsReducer;
