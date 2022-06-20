const yargs = require('yargs');
const process = require('process');
const notes = require('./notes.js');
const { argv } = require('process');

// yargs version
yargs.version('1.1.0')

//set up command for adding notes
yargs.command({
    command:'add',
    describe:' Add a new note',
    builder:
    {
        title: {
            title:'Note title',
            demandOption: true,
            type:'string'
        },
        body: {
            describe: 'Note body',
            demandOption:true,
            type:'string'
        }
    },
    handler: function(argv){
        notes.addNote(argv.title, argv.body)
    }  
})
yargs.parse()
