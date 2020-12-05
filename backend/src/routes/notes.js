const {Router} = require('express');
const notesController = require('../controller/notesController');

const router = Router();

router.get('/notes', notesController.listNotes);

router.post('/create', notesController.createNotes);

router.put('/update/:id', notesController.updateNotes);

router.delete('/delete/:id', notesController.deleteNotes);

module.exports = router;