export type ActionType = {
	type: string;
	payload?: any;
};

//* AUTH TYPES
export const GET_USER: string = '[AUTH] GET_USER';
export const LOGIN_ERROR: string = '[AUTH] ADMIN_LOGIN_ERROR';
export const LOGIN_SUCCESS: string = '[AUTH] ADMIN_LOGIN_SUCCESS';
export const LOGOUT: string = '[AUTH] ADMIN_LOGOUT';

//* CUSTOMERS TYPES
export const ADD_CUSTOMER: string = '[CUSTOMERS] ADD_CUSTOMER';
export const CLEAN_CUSTOMER: string = '[CUSTOMERS] CLEAN_CUSTOMER';
export const CLEAN_CUSTOMERS: string = '[CUSTOMERS] CLEAN_CUSTOMERS';
export const DELETE_CUSTOMER: string = '[CUSTOMERS] DELETE_CUSTOMER';
export const GET_CUSTOMER: string = '[CUSTOMERS] GET_CUSTOMER';
export const GET_CUSTOMERS: string = '[CUSTOMERS] GET_CUSTOMERS';
export const UPDATE_CUSTOMER: string = '[CUSTOMERS] UPDATE_CUSTOMER';

//* PRODUCTS TYPES
export const ADD_PRODUCT: string = '[PRODUCTS] ADD_PRODUCT';
export const CLEAN_PRODUCT: string = '[PRODUCT] CLEAN_PRODUCT';
export const CLEAN_PRODUCTS: string = '[PRODUCTS] CLEAN_PRODUCTS';
export const DELETE_PRODUCT: string = '[PRODUCTS] DELETE_PRODUCT';
export const GET_PRODUCT: string = '[PRODUCTS] GET_PRODUCT';
export const GET_PRODUCTS: string = '[PRODUCTS] GET_PRODUCTS';
export const UPDATE_PRODUCT: string = '[PRODUCTS] UPDATE_PRODUCT';

//* ORDERS TYPES
export const CANCEL_ORDER: string = '[ORDERS] CANCEL_ORDER';
export const CLEAN_ORDERS: string = '[ORDERS] CLEAN_ORDERS';
export const DELIVER_ORDER: string = '[ORDERS] DELIVER_ORDER';
export const GET_ORDERS: string = '[ORDERS] GET_ORDERS';

//* ALERT TYPES
export const HIDE_ALERT: string = '[ALERT] HIDE_ALERT';
export const SHOW_ALERT: string = '[ALERT] SHOW_ALERT';
