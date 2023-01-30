console.log("...CALLING notes.js...")
const fs = require('fs')
const chalk = require('chalk');

const getNotes = () => {
  //return fs.open('./notes.txt')
  const notes = loadNotes()
  return notes

}

//---------------------------------------------------------

const addNote = (title, body) => {
  const notes = loadNotes()
  //iterate through all notes
  //const duplicateNotes = notes.filter((item) => item.title === title)

  const duplicateNote = notes.find((item) => item.title === title)

  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body
    })

    saveNotes(notes)
  } else {
    console.log(chalk.red('Note Title Taken!'))
  }
}
//old way

// const addNote = function(title, body) {
//   const notes = loadNotes()
//   const duplicateNotes = notes.filter(function(item){
//     return item.title === title
//   })
//
//   if (duplicateNotes.length === 0) {
//     notes.push({
//       title: title,
//       body: body
//     })
//
//     saveNotes(notes)
//   } else {
//     console.log(chalk.red('Note Title Taken!'))
//   }
// }

//---------------------------------------------------------

const removeNote = (title) => {
  const notes = loadNotes()

  const notesToKeep = notes.filter((item) => item.title !== title)

  if (notes.length > notesToKeep.length){
    saveNotes(notesToKeep)
    console.log(chalk.red('Note Titled: ' + title + ' Has Been Removed!'))
  } else {
    console.log(chalk.red.inverse('No Note Found'))
  }
}

//---------------------------------------------------------

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes)
  fs.writeFileSync('notes.json', dataJSON)
}

//---------------------------------------------------------

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json')
    const dataJSON = dataBuffer.toString()
    return JSON.parse(dataJSON)
  } catch (e) {
    return []
  }
}

//---------------------------------------------------------

const listNotes = () => {
  const notes = loadNotes()

  console.log(chalk.blue("...Getting Note List..."))
  notes.forEach((note) => {
    console.log(chalk.white.inverse(note.title) + ': ' + note.body)
  });

}

//---------------------------------------------------------

const readNote = (title) => {
  const notes = loadNotes()

  const note = notes.find((item) => item.title === title)

  if (note) {
    console.log(chalk.white.inverse(note.title) + ': ' + note.body)

  } else {
    console.log(chalk.red('Specified note does not exist!'));
  }
}

//---------------------------------------------------------

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote
}
