import requester from './requester'

const baseUrl = 'http://localhost:3030/users'

/**
 * 
 * @param {string} email 
 * @param {string} password 
 */
//слагаме линка към когото искаме да го прекачим и данните(email,password), слагаме го в променлива като резултат тъй като го получаваме готов като json
export const login = (email, password) => requester.post(`${baseUrl}/login`, { email, password })

export const register = (email, password) => requester.post(`${baseUrl}/register`, { email, password })