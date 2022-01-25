import { useReducer } from 'react';
import { AxiosError } from 'axios';

import {
	GET_USER,
	LOGIN_SUCCESS,
	LOGIN_ERROR,
	LOGOUT
} from '../../types';

import AuthContext from './AuthContext';
import authReducer from './authReducer';
import { AuthInterface } from '../../interfaces';

import clientAxios from '../../config/axios';
import tokenUser from '../../config/tokenUser';

interface AuthProviderProps {
	children: JSX.Element | JSX.Element[];
}

const INITIAL_STATE: AuthInterface = {
	token: typeof window !== 'undefined' ? sessionStorage.getItem('auth-token') : '',
	authenticated: null,
	message: null,
	user: null,
}

const AuthProvider = ({ children }: AuthProviderProps) => {
	const [ authState, dispatch ] = useReducer(authReducer, INITIAL_STATE);

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
		if (userToken) tokenUser(userToken);

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

	//* Logout
	const logout = () => {
		dispatch({
			type: LOGOUT
		});
	}

	return (
		<AuthContext.Provider
			value={{
				authState,
				login,
				userAuthenticated,
				logout
			}}
		>
			{ children }
		</AuthContext.Provider>
	);
}

export default AuthProvider;
