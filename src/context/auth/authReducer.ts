import { ActionType, GET_USER, LOGIN_SUCCESS, LOGIN_ERROR, LOGOUT } from '../../types';

import { AuthInterface } from './authContext';

const authReducer = (state: AuthInterface, action: ActionType) => {
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
				user: null
			}
		case GET_USER:
			return {
				...state,
				authenticated: true,
				user: payload,
			}
		default:
			return state;
	}
}

export default authReducer;
