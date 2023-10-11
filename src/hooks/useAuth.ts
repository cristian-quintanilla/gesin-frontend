import { useContext } from 'react';

import AuthContext from '../context/auth/AuthContext';

export const useAuth = () => {
  const { authState, login, logout, userAuthenticated } = useContext(AuthContext);

  return {
    ...authState,
    login,
    logout,
    userAuthenticated
  }
}
