import { useReducer } from 'react';

import { SHOW_ALERT, HIDE_ALERT } from '../../types';

import AlertContext from './AlertContext';
import alertReducer from './alertReducer';
import { AlertInterface } from '../../interfaces';

interface AlertProviderProps {
	children: JSX.Element | JSX.Element[];
}

const INITIAL_STATE: AlertInterface = {
	msg: null,
	type: null,
}

const AlertProvider = ({ children }: AlertProviderProps) => {
	const [ alertState, dispatch ] = useReducer(alertReducer, INITIAL_STATE);

	//* Show the Alert
	const showAlert = (msg: string, type: string) => {
		dispatch({
			type: SHOW_ALERT,
			payload: {
				msg,
				type
			}
		});

		setTimeout(() => {
			dispatch({
				type: HIDE_ALERT
			});
		}, 4000);
	}

	return (
		<AlertContext.Provider
			value={{
				alertState,
				showAlert
			}}
		>
			{ children }
		</AlertContext.Provider>
	);
}

export default AlertProvider;
