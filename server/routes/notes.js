const express = require('express');
const { isTitleValid, isValidDescription } = require('../utils/validation');
const {
    getAllNotes,
    getNoteById,
    createNewNote,
    updateNote,
    removeNote
} = require('../handlers/actions');

const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        const notes = await getAllNotes();

        setTimeout(() => {
            res.json({ notes: notes });
        }, 1500);

    } catch (error) {
        next(error);
    }
});

router.get('/:id', async (req, res, next) => {
    try {
        const note = await getNoteById(req.params.id);
        setTimeout(() => {
            res.status(200).json({ note: note });
        }, 1200);
    } catch (error) {
        next(error);
    }
});

// router.use(checkAuth);

router.post('/add', async (req, res, next) => {
    const data = req.body;

    let errors = {};

    if (data.title.trim() === "") {
        errors.title = 'Title is required!';
    }else{
        if (!isTitleValid(data.title)) {
            errors.title = 'Improper title (too short)!';
        }
    }

    if (data.description.trim() === "") {
        errors.description = 'Description is required!';
    }else{
        if (!isValidDescription(data.description)) {
            errors.description = 'Improper description (too short)!';
        }
    }

    if (Object.keys(errors).length > 0) {
        return res.status(422).json({
            message: 'Adding the note failed due to validation errors.',
            errors,
        });
    }

    try {
        await createNewNote(data);
        setTimeout(() => {
            res.status(201).json({ message: 'Note added successfully.', note: data });
        }, 1000);
    } catch (error) {
        next(error);
    }
});

router.put('/edit/:id', async (req, res, next) => {
    const data = req.body;

    let errors = {};

    if (data.title.trim() === "") {
        errors.title = 'Title is required!';
    }else{
        if (!isTitleValid(data.title)) {
            errors.title = 'Improper title (too short)!';
        }
    }
    
    if (data.description.trim() === "") {
        errors.description = 'Description is required!';
    }else{
        if (!isValidDescription(data.description)) {
            errors.description = 'Improper description (too short)!';
        }
    }

    if (Object.keys(errors).length > 0) {
        return res.status(422).json({
            message: 'Updating the note failed due to validation errors.',
            errors,
        });
    }

    try {
        await updateNote(req.params.id, data);
        setTimeout(() => {
            res.status(201).json({ message: 'Note modified successfully.', note: data });
        }, 1000);
    } catch (error) {
        next(error);
    }
});

router.delete('/remove/:id', async (req, res, next) => {
    try {
        await removeNote(req.params.id);
        setTimeout(() => {
            res.json({ message: 'Note deleted.' });
        }, 300);
    } catch (error) {
        next(error);
    }
});


module.exports = router;
