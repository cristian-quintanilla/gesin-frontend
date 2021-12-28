import { createContext } from 'react';

export interface AuthInterface {
	token?: string | null;
	authenticated?: boolean | null;
	message?: {
		msg: string;
		type: string;
	} | null;
	user?: {
		_id: string;
		name: string;
		email: string;
		__v: string | number;
	} | null;
}

type ContextType = {
	token?: string | null;
	authenticated?: boolean | null;
	message?: {
		msg: string;
		type: string;
	} | null;
	user?: {
		_id: string;
		name: string;
		email: string;
		__v: string | number;
	} | null;
	login: (data: { email: string, password: string }) => void;
	userAuthenticated: () => void;
}

const authContext = createContext({} as ContextType);
export default authContext;
