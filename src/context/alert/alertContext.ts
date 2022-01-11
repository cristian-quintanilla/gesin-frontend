import { createContext } from 'react';

export interface AlertInterface {
	msg?: string | null;
	type?: 'success' | 'error' | 'default' | null;
};

type ContextType = {
	msg?: string | null;
	type?: 'success' | 'error' | 'default' | null;
	showAlert: (msg: string, type: string) => void;
};

const alertContext = createContext({} as ContextType);
export default alertContext;
