#!/usr/bin/env node

const fs = require('fs');
const path = require('path');


fs.readFile(path.resolve(__dirname, 'info.json'), 'utf8', function (err, data) {
  if (err) {
    return console.log(`Error getting contact info: ${err.message}`);
  }
  console.log(data);
});
