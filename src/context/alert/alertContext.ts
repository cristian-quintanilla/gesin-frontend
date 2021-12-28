import { createContext, Dispatch } from 'react';

// import { ActionType } from '../../types/index';

export interface AlertInterface {
	msg: string;
	type: 'success' | 'error' | 'default';
};

export type ContextType = {
  // state: AlertInterface;
  // dispatch: Dispatch<ActionType>;
	// alert: AlertInterface;
	msg: string;
	type: 'success' | 'error' | 'default';
	showAlert: (msg: string, type: string) => void;
};

const alertContext = createContext({} as ContextType);

export default alertContext;
