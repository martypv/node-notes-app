const validator = require('validator')
const chalk = require('chalk')
const fs = require('fs')
const yargs = require('yargs')

const utils = require('./utils.js')
const notes = require('./notes.js')

//Customize yargs version
yargs.version('1.0.1')


yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: 'string'
    }
  },
  handler: function (argv) {

    console.log(chalk.blue("Adding Note"), argv)
    console.log(chalk.bold('Title: ' + argv.title))
    console.log("Body: " + argv.body)
    notes.addNote(argv.title, argv.body)
  }
})

yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    }
  },
  handler: function (argv){
    console.log(chalk.blue("Removing Note"))
    notes.removeNote(argv.title)
  }
})

yargs.command({
  command: 'read',
  describe: 'Retrieve a note to read',
  builder: {
    title: {
      describe: 'Read a note by title',
      demandOption: true,
      type: 'string'
    }
  },
  handler: function (argv){
    console.log(chalk.blue("Reading Note"))
    notes.readNote(argv.title)
  }
})

yargs.command({
  command: 'list',
  describe: 'List notes',
  handler: function(){
    // console.log(chalk.blue("...Getting Note List..."))
    // const myNotes = notes.getNotes()
    // myNotes.forEach((note) => {
    //   console.log(note.title + ': ' + note.body)
    // })
    //console.log(notes.getNotes())
    notes.listNotes()
  }
})






yargs.parse()


//console.log(yargs.argv)
//-----------------------------------------------

// console.log(getNotes)
// console.log(validator.isEmail('marty@desmery.com'))
// console.log(validator.isURL('https://google.com'))



//fs.writeFileSync('notes.txt', 'This file was created by Node.js!')

//fs.appendFileSync('notes.txt', " I did it")

//console.log(chalk.bold(chalk.red("ERROR!")))

//console.log(process.argv[2])

// const command = process.argv[2]
//
// if (command === 'add'){
//   console.log(chalk.blue("Adding Note"))
// } else if (command === 'remove'){
//   console.log(chalk.blue("Removing Note"))
// }
