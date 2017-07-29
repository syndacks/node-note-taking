console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');

const notes = require('./notes');

var command = process.argv[2];

console.log('Command: ', command);
console.log(process.argv)

if (command === 'add') {
  console.log('Adding new note.');
} else if (command === 'list') {
  console.log('Listing all notes.');
} else if (command === 'read') {
  console.log('Reading a note for you.')
} else if (command === 'remove') {
  console.log('Removing a note.')
} else {
  console.log('Unknown command given.')
}
