import { createContext } from 'react';

import { AlertInterface } from '../../interfaces';

interface AlertContextInterface {
	alertState: AlertInterface;
	showAlert: (msg: string, type: string) => void;
};

const AlertContext = createContext<AlertContextInterface>({} as AlertContextInterface);
export default AlertContext;
