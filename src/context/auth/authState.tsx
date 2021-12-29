import { ReactNode, useReducer } from 'react';
import  { AxiosError } from 'axios';

import { GET_USER, LOGIN_SUCCESS, LOGIN_ERROR, LOGOUT } from '../../types';

import authContext from './authContext';
import authReducer from './authReducer';

import clientAxios from '../../config/axios';
// import Toast from '../../components/Toast';
import tokenAdminAuth from '../../config/tokenUser';

const AuthState = ({ children }: { children: ReactNode }) => {
	const initialState = {
		token: typeof window !== 'undefined' ? sessionStorage.getItem('auth-token') : '',
		authenticated: null,
		message: null,
		user: null,
	}

	const [ state, dispatch ] = useReducer(authReducer, initialState);

	//* Auth Login
	const login = async (data: { email: string, password: string }) => {
		try{
			const result = await clientAxios.post('/api/v1/auth/login', data);

			dispatch({
				type: LOGIN_SUCCESS,
				payload: result.data
			});

			//_ Get user authenticated
			userAuthenticated();
		}catch (error) {
			const err = error as AxiosError;
			const msg = err.response?.data.msg || 'Network Error';
			const type = 'error';
			const alert = { msg, type };

			dispatch({
				type: LOGIN_ERROR,
				payload: alert
			});
		}
	}

	//* Get Uset authenticated
	const userAuthenticated = async () => {
		const userToken = sessionStorage.getItem('auth-token');

		//_ Send token via headers
		if (userToken) tokenAdminAuth(userToken);

		try{
			const result = await clientAxios.get('/api/v1/auth/me');

			dispatch({
				type: GET_USER,
				payload: result.data.user
			});
		}catch (error){
			dispatch({
				type: LOGIN_ERROR,
				payload: null
			});
		}
	}

	return (
		<authContext.Provider
			value={{
				token: state.token,
				authenticated: state.authenticated,
				message: state.message,
				user: state.user,
				login,
				userAuthenticated
			}}
		>
			{ children }
		</authContext.Provider>
	);
}

export default AuthState;
