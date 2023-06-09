const { Router } = require('express')
const router = Router()

const { 
    renderNoteForm, 
    createNewNote, 
    renderNotes,
    renderEditForm,  
    updateNoteForm, 
    delteNote 
} = require('../controllers/notes.controllers');

const {isAuthenticated} = require('../helpers/auth')

//New note
router.get('/notes/add', isAuthenticated, renderNoteForm);

router.post('/notes/new-note', isAuthenticated, createNewNote);

//Get All note
router.get('/notes', isAuthenticated, renderNotes);

// Edit notes
router.get('/notes/edit/:id', isAuthenticated, renderEditForm);

router.put('/notes/edit/:id', isAuthenticated, updateNoteForm);

///Delete notes
router.delete('/notes/delete/:id', isAuthenticated, delteNote)

module.exports = router