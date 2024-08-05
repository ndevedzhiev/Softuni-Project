import { useContext } from "react"
import { login, register } from "../api/auth-api.js"
import { authContext } from "../contexts/authContext.js"
//useLogin стои между service-a и компонента Login, изпраща loginHandler-a, също така получава данните от login API и го подава на change Authstate
export const useLogin = () => {

  const {changeAuthState} = useContext(authContext)

    const loginHandler =  async (email, password) => {
    const result = await login(email, password)
    
    changeAuthState(result)

    return result
 
    }

    return loginHandler
}

//Register:
export const useRegister = () => {
  const {changeAuthState} = useContext(authContext)

  const registerHandler = async (email, password) => {
    const result = await register(email, password)

    changeAuthState(result)

    return result
  }
  return registerHandler
}