// src/Components/logout/Logout.jsx
import { useContext, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';

export default function Logout() {
  const { changeAuthState } = useContext(AuthContext);

  useEffect(() => {
    changeAuthState({});
    localStorage.removeItem('accessToken');
  }, [changeAuthState]);

  return <Navigate to="/" />;
}
