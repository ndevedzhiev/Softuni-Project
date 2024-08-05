import { createContext } from "react";
import authState from "../Layout/Layout.jsx";

export const authContext = createContext({
    //слагаме default стойности тук за да имаме по-добра документация и intelliSense
        userId: authState._id,
        email: '',
        accessToken: '',
        isAuthenticated: false,
        changeAuthState: (authState = {})  => null,
     
})
