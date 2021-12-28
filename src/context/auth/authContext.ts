import { createContext } from 'react';

export interface AuthInterface {
	token?: string | null;
	authenticated?: boolean | null;
	message?: string | null;
	// user: string;
}

type ContextType = {
	token?: string | null;
	authenticated?: boolean | null;
	message?: string | null;
	login: (data: { email: string, password: string }) => void;
	// user: string;
}

const authContext = createContext({} as ContextType);
export default authContext;
