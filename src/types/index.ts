export type ActionType = {
	type: string;
	payload?: any;
};

export const LOGIN_SUCCESS: string = '[AUTH] ADMIN_LOGIN_SUCCESS';
export const LOGIN_ERROR: string = '[AUTH] ADMIN_LOGIN_ERROR';
export const LOGOUT: string = '[AUTH] ADMIN_LOGOUT';
// export const ADMIN_ERROR: string = 'ADMIN_ERROR';
// export const ADMIN_ERROR_CLEAN: string = 'ADMIN_ERROR_CLEAN';
export const SHOW_ALERT: string = '[ALERT] SHOW_ALERT';
export const HIDE_ALERT: string = '[ALERT] HIDE_ALERT';
