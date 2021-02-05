const fs = require('fs');

const adjectives = 'adjectives.txt';
const adverbs = 'adverbs.txt';
const auxiliaries = 'auxiliaries.txt';
const names = 'names.txt';
const nouns = 'nouns.txt';
const prepositios = 'prepositios.txt';
const verbs = 'verbs.txt';

const update = (index=0) => {
  const arr = [
    'adjectives.txt',
    // 'adverbs.txt',
    // 'auxiliaries.txt',
    // 'names.txt',
    // 'nouns.txt',
    // 'prepositions.txt',
    // 'verbs.txt'
  ];
  if (index >= arr.length) return;
  fs.readFile(arr[index], (err, data) => {
    if (data===undefined) return;
    data = '[' +  data.toString().split('\n').map(item => `"${item}"`) + ']';
    var splitter = arr[index].split('.');
    fs.writeFile(splitter[0] + '.json', data, (err)=> {
      if (err) throw err;
      update(index+1);
    })
  })
};

update();
