import { ActionType, SHOW_ALERT, HIDE_ALERT } from '../../types';

import { AlertInterface } from '../../interfaces';

const alertReducer = (state: AlertInterface, action: ActionType) => {
	const { type, payload } = action;

	switch (type) {
		case SHOW_ALERT:
			return {
				msg: payload.msg,
				type: payload.type
			}
		case HIDE_ALERT:
			return {
				msg: null,
				type: null
			}
		default:
			return state;
	}
}

export default alertReducer;
