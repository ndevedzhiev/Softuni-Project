import { createContext } from "react";

export const authContext = createContext({
   
        email: '',
        accessToken: '',
        isAuthenticated: false,
        changeAuthState: (authState = {})  => null,
     
})
