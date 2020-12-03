const noteRepository = require('../model/noteRepository');

async function listNotes(req, res) {
    const result = await noteRepository.find();

    if(!result)
        res.sendStatus(404);
    else
        res.json(result);
};

async function createNotes(req, res) {
    const note = req.body;
    const result = await noteRepository.create(note);

    if(!result) 
        return res.sendStatus(400);
    else 
        res.json(note);
};

async function updateNotes(req, res) {
    const id = req.params.id;
    const note = req.body;
    const result = await noteRepository.update(id,note);

    if(!result)
        return res.sendStatus(400);
    else
        res.json(note);
};

async function deleteNotes(req, res) {
    const id = req.params.id;
    const note = req.body;
    const result = await noteRepository.del(id)
    
    if(!result)
        return res.sendStatus(400);
    else
        res.json(note);
};

module.exports = {
    listNotes,
    createNotes,
    updateNotes,
    deleteNotes
}