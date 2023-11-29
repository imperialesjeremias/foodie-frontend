import axios from 'axios'

export const loginJWT = async (email) => await axios.post('http://localhost:3000/api/u/login', email);
export const registerJWT = async (email) => await axios.post('http://localhost:3000/api/u/register', email);