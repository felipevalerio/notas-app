const noteModel = require('./noteModel');

function create(note) {
    return noteModel.create(note);
}

function update(id, note) {
    return noteModel.update(note, {
        where: {
            id: id
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

module.exports = {
    create,
    update,
    find,
    del
}