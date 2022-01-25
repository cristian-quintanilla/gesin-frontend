import { useContext } from 'react';

import AlertContext from '../context/alert/AlertContext';

export const useAlert = () => {
  const { alertState, showAlert } = useContext(AlertContext);
  const { msg, type } = alertState;

  return {
    msg,
    type,
    showAlert
  }
}
