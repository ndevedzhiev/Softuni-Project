
import { login, register } from "../api/auth-api.js"
import { useAuthContext } from "../contexts/AuthContext.jsx"
//useLogin стои между service-a и компонента Login, изпраща loginHandler-a, също така получава данните от login API и го подава на change Authstate
export const useLogin = () => {

  const {changeAuthState} = useAuthContext()

    const loginHandler =  async (email, password) => {
    const result = await login(email, password)
    
    changeAuthState(result)

    return result
 
    }

    return loginHandler
}

//Register:
export const useRegister = () => {
  const {changeAuthState} = useAuthContext()

  const registerHandler = async (email, password) => {
    const result = await register(email, password)

    changeAuthState(result)

    return result
  }
  return registerHandler
}