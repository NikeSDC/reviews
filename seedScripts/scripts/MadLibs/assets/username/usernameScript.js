const adjectives = require('./json/adjectives.json');
const adverbs = require('./json/adverbs.json');
const auxiliaries = require('./json/auxiliaries.json');
const names = require('./json/names.json');
const nouns = require('./json/nouns.json');
const prepositions = require('./json/prepositions.json');
const verbs = require('./json/verbs.json');

const adjectivesLengths =  adjectives.length;
const adverbsLengths =  adverbs.length;
const auxiliariesLengths =  auxiliaries.length;
const namesLengths =  names.length;
const nounsLengths =  nouns.length;
const prepositionsLengths =  prepositions.length;
const verbsLengths =  verbs.length;

const adjective = () => adjectives[Math.floor(Math.random()*adjectivesLengths)];
const adverb = () => adverbs[Math.floor(Math.random()*adverbsLengths)];
const auxiliary = () => auxiliaries[Math.floor(Math.random()*auxiliariesLengths)];
const name = () => names[Math.floor(Math.random()*namesLengths)];
const noun = () => nouns[Math.floor(Math.random()*nounsLengths)];
const preposition = () => prepositions[Math.floor(Math.random()*prepositionsLengths)];
const verbTransitive = () => verbs[Math.floor(Math.random()*verbsLengths)];

// define all function combinations template
const mad1 = () => name() + ' ' + noun();
const mad2 = () => adjective() + ' ' + name();
const mad3 = () => adjective() + ' ' + noun();
const mad4 = () => adverb() + ' ' + verbTransitive();
const mad5 = () => noun() + ' ' + verbTransitive();
const mad6 = () => name() + ' ' + verbTransitive();
const mad7 = () => verbTransitive() + ' ' + preposition() + ' ' + noun();
const mad8 = () => noun() + ' ' + auxiliary() + ' ' + verbTransitive();
const mad9 = () => verbTransitive() + ' ' + noun();
const mad10 = () => noun() + ' ' + auxiliary() + ' ' + noun();
const mad11 = () => name() + ' ' + auxiliary() + ' ' + noun();
const mad12 = () => verbTransitive() + ' ' + name();


const dispatcher = () => {
  let caseInt = Math.floor(Math.random() * 12) + 1;
  switch (caseInt) {
    case 1:
      return mad1();
    case 2:
      return mad2();
    case 3:
      return mad3();
    case 4:
      return mad4();
    case 5:
      return mad5();
    case 6:
      return mad6();
    case 7:
      return mad7();
    case 8:
      return mad8();
    case 9:
      return mad9();
    case 10:
      return mad10();
    case 11:
      return mad11();
    case 12:
      return mad12();
  }
};

// upon creating an entry, generate a random() integer between one and twelve
// pass it in the dispatcher function

module.exports = {usernames: dispatcher};