import { ReactElement, ReactNode, useReducer } from 'react';

import { SHOW_ALERT, HIDE_ALERT } from '../../types';
import AlertContext from './alertContext';
import alertReducer from './alertReducer';

interface Props {
  children: ReactNode;
}

const AlertState = ({ children }: Props) => {
	const initialState = {
		// alert: undefined
		msg: '',
		type: '',
	}

	/* Dispatch for Actions */
	const [ state, dispatch ] = useReducer(alertReducer, initialState);

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
		}, 5000);
	}

	return (
		<AlertContext.Provider
			value={{
				msg: state.msg,
				type: state.type,
				showAlert
			}}
		>
			{ children }
		</AlertContext.Provider>
	);
}

export default AlertState;
