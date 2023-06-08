const notesCtrl = {};
const Note = require('../models/note')

notesCtrl.renderNoteForm = (req, res) => {
    res.render('notes/new-note')

}

notesCtrl.createNewNote = async (req, res) => {
    const {title, description} = req.body;
    const newNote = new Note({title: title, description: description});
    newNote.user = req.user.id
    await newNote.save();
    req.flash('success_msg', 'Note Added Successfully')
    res.redirect('/notes')
};

notesCtrl.renderNotes = async (req, res) => {
    const notes = await Note.find({user: req.user.id}).sort({createdAt: 'desc'}).lean();
    console.log(this.renderNotes)
    res.render('notes/all-notes', { notes })
};

notesCtrl.renderEditForm = async (req, res) => {
    const note = await Note.findById(req.params.id).lean();
    if (note.user != req.user.id){
        return res.redirect('/notes')
    }
    res.render('notes/edit-note', { note });
};


notesCtrl.updateNoteForm = async (req, res) =>{
    const {title, description} = req.body;
    await Note.findByIdAndUpdate(req.params.id, {title, description})
    req.flash('success_msg', 'Note update')
    res.redirect('/notes')
}

notesCtrl.delteNote = async (req, res) =>{
    await Note.findByIdAndDelete(req.params.id)
    req.flash('success_msg', 'Delete note')
    res.redirect('/notes')
}


module.exports = notesCtrl;