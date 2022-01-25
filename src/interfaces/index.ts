import { MessageType, UserType } from '../types';

export interface AuthInterface {
	token: string | null;
	authenticated: boolean | null;
	message: MessageType | null;
	user: UserType | null;
}

export interface AlertInterface {
	msg: string | null;
	type: 'success' | 'error' | 'default' | null;
};
