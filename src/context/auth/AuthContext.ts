import { createContext } from 'react';

import { AuthInterface } from '../../interfaces';

interface AuthContextInterface {
	authState: AuthInterface;
	login: (data: { email: string, password: string }) => void;
	logout: () => void;
	userAuthenticated: () => void;
}

const AuthContext = createContext<AuthContextInterface>({} as AuthContextInterface);
export default AuthContext;
