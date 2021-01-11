fs = require('fs');
const path = require('path');


const loadNotes = () =>{
  try {
    const data = fs.readFileSync(
        path.join(__dirname, '../db/db.json'),
    );
    return JSON.parse(data);
  } catch(err) {
    console.log(err);
  };
};


const syncNotes = (notesArray) =>{
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify(notesArray , null, 2)
      );
    
};


function findById(id, notesArray) {
  const result = notesArray.filter(note => note.id === id)[0];
  return result;
}


module.exports = {syncNotes, loadNotes, findById};
