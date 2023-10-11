import {
	ActionType,
	GET_USER,
	LOGIN_ERROR,
	LOGIN_SUCCESS,
	LOGOUT,
	SET_LOADING,
} from '../../types';

import { AuthInterface } from '../../interfaces';

const authReducer = (state: AuthInterface, action: ActionType): AuthInterface => {
	const { type, payload } = action;

	switch (type) {
		case LOGIN_SUCCESS:
			sessionStorage.setItem('auth-token', payload.token);
			return {
				...state,
				authenticated: true,
				message: null,
			}
		case LOGIN_ERROR:
		case LOGOUT:
			sessionStorage.removeItem('auth-token');
			return {
				...state,
				authenticated: null,
				message: payload,
				token: null,
				user: null,
				isLoading: false,
			}
		case GET_USER:
			return {
				...state,
				authenticated: true,
				user: payload,
			}
		case SET_LOADING:
			return {
				...state,
				isLoading: payload,
			}
		default:
			return state;
	}
}

export default authReducer;
