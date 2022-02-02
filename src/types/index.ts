export type ActionType = {
	type: string;
	payload?: any;
};

//* AUTH TYPES
export const LOGIN_SUCCESS: string = '[AUTH] ADMIN_LOGIN_SUCCESS';
export const LOGIN_ERROR: string = '[AUTH] ADMIN_LOGIN_ERROR';
export const LOGOUT: string = '[AUTH] ADMIN_LOGOUT';
export const GET_USER: string = '[AUTH] GET_USER';

//* CUSTOMERS TYPES
export const GET_CUSTOMERS: string = '[CUSTOMERS] GET_CUSTOMERS';
export const GET_CUSTOMER: string = '[CUSTOMERS] GET_CUSTOMER';
export const ADD_CUSTOMER: string = '[CUSTOMERS] ADD_CUSTOMER';
export const DELETE_CUSTOMER: string = '[CUSTOMERS] DELETE_CUSTOMER';
export const UPDATE_CUSTOMER: string = '[CUSTOMERS] UPDATE_CUSTOMER';
export const CLEAN_CUSTOMERS: string = '[CUSTOMERS] CLEAN_CUSTOMERS';

//* PRODUCTS TYPES
export const GET_PRODUCTS: string = '[PRODUCTS] GET_PRODUCTS';
export const GET_PRODUCT: string = '[PRODUCTS] GET_PRODUCT';
export const ADD_PRODUCT: string = '[PRODUCTS] ADD_PRODUCT';
export const DELETE_PRODUCT: string = '[PRODUCTS] DELETE_PRODUCT';
export const UPDATE_PRODUCT: string = '[PRODUCTS] UPDATE_PRODUCT';

//* ORDERS TYPES
export const GET_ORDERS: string = '[ORDERS] GET_ORDERS';
export const CANCEL_ORDER: string = '[ORDERS] CANCEL_ORDER';
export const DELIVER_ORDER: string = '[ORDERS] DELIVER_ORDER';

//* ALERT TYPES
export const SHOW_ALERT: string = '[ALERT] SHOW_ALERT';
export const HIDE_ALERT: string = '[ALERT] HIDE_ALERT';
