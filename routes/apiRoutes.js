const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const {loadNotes, syncNotes, findById} = require('../lib/notes.js');

router.get('/notes', (req,res) =>{
    notes = loadNotes();
    res.json(notes);
});

router.get('/notes/:id', (req, res) => {
    notes = loadNotes();
    const result = findById(req.params.id, notes);
    if(result){
      res.json(result);
    } else {
      res.sendStatus(404);
    } 
  });  

router.post('/notes', (req,res) =>{
    const newNote = req.body
    newNote.id = uuidv4();
    notes.push(newNote);
    syncNotes(notes);
    res.json(newNote);
});

router.delete('/notes:id?', (req, res) => { 
  const id = req.query.id;
  notes = loadNotes();
  newNotes = notes.filter(note => note.id != id);
  syncNotes(newNotes);
  res.send(JSON.stringify(newNotes));
}) 

module.exports = router;