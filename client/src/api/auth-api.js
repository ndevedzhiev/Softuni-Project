import requester from './requester'

const baseUrl = 'http://localhost:3030/users'

/**
 * 
 * @param {string} email 
 * @param {string} password 
 */

export const login = async (email, password) => {
    //слагаме линка към когото искаме да го прекачим и данните(email,password), слагаме го в променлива като резултат тъй като го получаваме готов като json
    const authData = await requester.post(`${baseUrl}/login`, { email, password })

    return authData
}