const { v4: generateId } = require('uuid');
const { NotesNotFoundError } = require('../utils/errors');
const { writeData, readData } = require('./file-actions');

async function getAllNotes() {
    const storedData = await readData();
    if (!storedData.notes) {
        throw new NotesNotFoundError("No previous notes found!");
    }
    return storedData.notes;
}

async function getNoteById(id) {
    const storedData = await readData();
    if (!storedData.notes || storedData.notes.length === 0) {
        throw new NotesNotFoundError("No previous notes found!");
    }
    const noteData = storedData.notes.find(note => note.id === id);
    if (!noteData) {
        throw new NotesNotFoundError("Couldn't find notes for id: " + id);
    }
    return noteData;
}

async function createNewNote(data) {
    const storedData = await readData();
    storedData.notes.push({
        id: generateId(),
        timestamp: new Date().toLocaleString(),
        ...data
    });
    await writeData(storedData);
}

async function updateNote(id, data) {
    const storedData = await readData();
    if (!storedData.notes || storedData.notes.length === 0) {
        throw new NotesNotFoundError("No previous notes found!");
    }
    const keyPos = storedData.notes.findIndex(note => note.id === id);
    if (keyPos < 0) {
        throw new NotesNotFoundError("Couldn't find notes for id: " + id);
    }
    storedData.notes[keyPos] = { id, timestamp: new Date().toLocaleString(), ...data };
    await writeData(storedData);
}

async function removeNote(id) {
    const storedData = await readData();
    storedData.notes = storedData.notes.filter(note => note.id !== id);
    await writeData(storedData);
}

exports.getAllNotes = getAllNotes;
exports.getNoteById = getNoteById;
exports.createNewNote = createNewNote;
exports.updateNote = updateNote;
exports.removeNote = removeNote;