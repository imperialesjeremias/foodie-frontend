import axios from 'axios';

const axiosd = axios.create({
    baseURL: 'http://localhost:5173/',
    timeout: 1000,
    headers: { 'X-Custom-Header': 'foobar' }
});

export default axiosd;
