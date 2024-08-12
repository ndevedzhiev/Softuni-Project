import { createContext, useContext, useState } from "react";
import authState from "../Layout/Layout.jsx";

export const AuthContext = createContext({
    //слагаме default стойности тук за да имаме по-добра документация и intelliSense
        userId: authState._id,
        email: '',
        accessToken: '',
        isAuthenticated: false,
        changeAuthState: (authState = {})  => null,
})



export default function AuthContextProvider (props) {

  const [authState, setAuthState] = useState({});

  const changeAuthState = (state) => {
    if (state.accessToken) {
      localStorage.setItem('accessToken', state.accessToken);
    } else {
      localStorage.removeItem('accessToken');
    }
    setAuthState(state);
  };

  const contextData = {
    userId: authState._id,
    email: authState.email,
    accessToken: authState.accessToken,
    isAuthenticated: !!authState.email,
    changeAuthState,
  };

return (
    <AuthContext.Provider value={contextData}>
        {props.children}
    </AuthContext.Provider>
)
}

export function useAuthContext() {
  const authData = useContext(AuthContext)
  
  return authData
}