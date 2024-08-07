// src/Components/logout/Logout.jsx
import { useContext, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { authContext } from '../../contexts/authContext';

export default function Logout() {
  const { changeAuthState } = useContext(authContext);

  useEffect(() => {
    changeAuthState({});
    localStorage.removeItem('accessToken');
  }, [changeAuthState]);

  return <Navigate to="/" />;
}
