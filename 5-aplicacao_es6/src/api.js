import axios from 'axios';

const api = axios.create({
    // Definindo URL base da API.
    baseURL: 'http://api.github.com',
});

export default api;
