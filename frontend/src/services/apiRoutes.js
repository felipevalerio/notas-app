import baseAPI from './api';

const api = baseAPI('http://localhost:3001/');

async function create(form) {
    const result = await api.post('create', form);

    return result.data;
}

async function list() {
    const result = await api.get('notes');

    return result.data;
}

export default {
    create,
    list
};