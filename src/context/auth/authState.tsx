import { ReactNode, useReducer } from 'react';

import { LOGIN_SUCCESS, LOGIN_ERROR, LOGOUT } from '../../types';

import authContext from './authContext';
import authReducer from './authReducer';

import clientAxios from '../../config/axios';
import Toast from '../../components/Toast';

const AuthState = ({ children }: { children: ReactNode }) => {
	const initialState = {
		token: typeof window !== 'undefined' ? sessionStorage.getItem('auth-token') : '',
		authenticated: null,
		message: null
	}

	const [ state, dispatch ] = useReducer(authReducer, initialState);

	//* Auth Login
	const login = async (data: { email: string, password: string }) => {
		try{
			const result = await clientAxios.post('/api/v1/auth/login', data);
			console.log(result);

			// dispatch({
			// 	type: LOGIN_SUCCESS,
			// 	payload: result.data
			// });
		}catch (error){
			console.log(error);
			// const alert = {
			// 	msg: error.response.data.msg,
			// 	category: 'bg-red-500'
			// }

			// dispatch({
			// 	type: ADMIN_LOGIN_ERROR,
			// 	payload: alert
			// });
		}
	}

	return (
		<authContext.Provider
			value={{
				token: state.token,
				login
			}}
		>
			{ children }
		</authContext.Provider>
	);
}

export default AuthState;
