const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes');

// console.log(_.isString(true));
// console.log(_.isString('Dacks'));
var filteredArray = _.uniq(['Dacks', 1, 'Dacks', 1, 2, 3, 4]);
console.log(filteredArray);

// var addition = notes.add(9, -2);
// console.log(addition);

// var user = os.userInfo();
//
// fs.appendFile('greetings.txt', `Hello ${user.username}! You are ${notes.age}`, function (err) {
//   if (err) {
//     console.log('Unable to write to file');
//   }
// });
