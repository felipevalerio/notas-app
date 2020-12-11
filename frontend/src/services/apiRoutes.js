import baseAPI from './api';

const api = baseAPI('http://localhost:3001/');

async function create(form) {
    const result = await api.post('create', form);

    return result.data;
}

export default {
    create
};