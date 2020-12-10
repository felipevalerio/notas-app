import baseAPI from './api';

const api = baseAPI('http://localhost:3001/');

async function create() {
    const result = await api.post('create');

    return result.data;
}

async function list() {
    
}