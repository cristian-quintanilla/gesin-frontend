import clientAxios from './axios';

const tokenAdminAuth = (token: string)=> {
	token
	? clientAxios.defaults.headers.common['x-auth-token'] = token
	: delete clientAxios.defaults.headers.common['x-auth-token'];
}

export default tokenAdminAuth;
