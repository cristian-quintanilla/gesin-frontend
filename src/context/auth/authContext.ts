import { createContext } from 'react';

import { MessageType, UserType } from '../../types/index';

export interface AuthInterface {
	token?: string | null;
	authenticated?: boolean | null;
	message?: MessageType | null;
	user?: UserType | null;
}

type ContextType = {
	token?: string | null;
	authenticated?: boolean | null;
	message?: MessageType | null;
	user?: UserType | null;
	login: (data: { email: string, password: string }) => void;
	userAuthenticated: () => void;
	logout: () => void;
}

const authContext = createContext({} as ContextType);
export default authContext;
