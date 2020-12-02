import noteModel from './noteModel';

function create(note) {
    return noteModel.create(note);
}

function update(noteId, note) {
    return noteModel.update(note, {
        where: {
            id: noteId
        }
    });
}

function find() {
    return noteModel.findAll();
}

function del(noteId) {
    return noteModel.destroy({
        where: {
            id: noteId
        }
    });
}

export default {
    create,
    update,
    find,
    del
}