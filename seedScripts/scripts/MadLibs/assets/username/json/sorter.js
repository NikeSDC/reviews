let adjectives =  require('./adjectives.json');
let adverbs =  require('./adverbs.json');
let auxiliaries =  require('./auxiliaries.json');
let names =  require('./names.json');
let nouns =  require('./nouns.json');
let prepositions =  require('./prepositions.json');
let verbs =  require('./verbs.json');
const fs = require('fs');

    adjectives = adjectives.sort(function (a, b) {
      if (a < b) {
        return -1;
      }
      if (a > b) {
        return 1;
      }
      return 0;
    });

    fs.writeFile('adjectives2.json',JSON.stringify(adjectives), (err)=> {
      if (err) throw err;
      console.log('written to file');
    });
