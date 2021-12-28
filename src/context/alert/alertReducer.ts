import { SHOW_ALERT, HIDE_ALERT } from '../../types';

import { AlertInterface } from './alertContext';
import { ActionType } from '../../types';

const alertReducer = (state: AlertInterface, action: ActionType) => {
	const { type, payload } = action;

	switch (type){
		case SHOW_ALERT:
			return {
				msg: payload.msg,
				type: payload.type
			}
		case HIDE_ALERT:
			return {
				msg: '',
				type: ''
			}
		default:
			return state;
	}
}

export default alertReducer;
