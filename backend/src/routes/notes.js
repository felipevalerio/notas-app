import {Router} from 'express';
import notesController from '../controller/notesController';

const router = Router();

router.get('/notes', notesController.listNotes);

router.post('/create', notesController.createNotes);

router.put('/update/:noteId', notesController.updateNotes);

router.delete('/delete/:noteId', notesController.deleteNotes);

export default router;