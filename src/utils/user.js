import axios from 'axios';

export const user = async ({ email, password, firstName, lastName }) => await axios.post('http://localhost:3000/api/u/edit', { email, password, firstName, lastName });
export const getDataUser = async ({ email }) => {
    return await axios.get(`http://localhost:3000/api/u/profile`, { email });
};