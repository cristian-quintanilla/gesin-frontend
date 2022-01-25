import { useContext } from 'react';

import AuthContext from '../context/auth/AuthContext';

export const useAuth = () => {
  const { authState, login, logout, userAuthenticated } = useContext(AuthContext);
  const { authenticated, message, token, user } = authState;

  return {
    authenticated,
    message,
    token,
    user,
    login,
    logout,
    userAuthenticated
  }
}
