import { createContext } from 'react';

export interface AlertInterface {
	msg?: string;
	type?: 'success' | 'error' | 'default';
};

type ContextType = {
	msg?: string;
	type?: 'success' | 'error' | 'default';
	showAlert: (msg: string, type: string) => void;
};

const alertContext = createContext({} as ContextType);
export default alertContext;
