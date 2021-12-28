import { ReactNode, useReducer } from 'react';

import { SHOW_ALERT, HIDE_ALERT } from '../../types';
import alertContext from './alertContext';
import alertReducer from './alertReducer';

const AlertState = ({ children }: { children: ReactNode }) => {
	const [ state, dispatch ] = useReducer(alertReducer, {
		msg: '',
		type: '',
	});

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
		<alertContext.Provider
			value={{
				msg: state.msg,
				type: state.type,
				showAlert
			}}
		>
			{ children }
		</alertContext.Provider>
	);
}

export default AlertState;
