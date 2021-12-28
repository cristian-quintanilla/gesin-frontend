export type ActionType = {
	type: string;
	payload?: any;
};

export const LOGIN_SUCCESS: string = '[AUTH] ADMIN_LOGIN_SUCCESS';
export const LOGIN_ERROR: string = '[AUTH] ADMIN_LOGIN_ERROR';
export const LOGOUT: string = '[AUTH] ADMIN_LOGOUT';
export const GET_USER: string = '[AUTH] GET_USER';

export const SHOW_ALERT: string = '[ALERT] SHOW_ALERT';
export const HIDE_ALERT: string = '[ALERT] HIDE_ALERT';
