const {usernames} = require('./MadLibs/assets/username/usernameScript.js');
const countries = require('./MadLibs/assets/countries/listOfCountries.json');
const cities = require('./MadLibs/assets/cities/cities.json');
const states = require('./MadLibs/assets/states/states.json');
const { reviewBuilder } = require('./MadLibs/assets/reviews/reviews.js');

const countriesLength = countries.length;
const citiesLength = cities.length;
const statesLength = states.length;

const username = () => usernames();
const country = () => countries[Math.floor(Math.random()*countriesLength)];
const city = () => cities[Math.floor(Math.random()*citiesLength)];
const comfort = () => Math.floor(Math.random() * 3);
const durability = () => Math.floor(Math.random()*3);
const offenseStyle = () => Math.floor(Math.random()*3);
const defenseStyle = () => Math.floor(Math.random()*3);
const overallRating = () => Math.floor(Math.random() * 5);
const playArea = () => Math.floor(Math.random() * 3) - 1;
const review = () => reviewBuilder();
const reviewTitle = () => reviewBuilder(1);
const size = () => Math.floor(Math.random() * (15 - 6) + 6);
const state = () => states[Math.floor(Math.random()*statesLength)];
const upvote = () => Math.floor(Math.random() * 40);
const downvote = () => Math.floor(Math.random() * 30);

// tu vas avoir des fonctions/fichiers séparés par madlib générateur.
// ensuite, tu dois déterminer la probabilité qu'un champ soit rempli
// crée une dispatcheuse avec la probabilité.

// make an array of each function /
// for each new entry,
// 	iterate through the array, determine if you fill in the field or not,

const Outfile = '';

var caller = [
  // reviewId,
  // foreignKey,
  username,
  country,
  city,
  comfort,
  durability,
  offenseStyle,
  defenseStyle,
  overallRating,
  playArea,
  review,
  reviewTitle,
  size,
  state,
  upvote,
  downvote
];

const fs = require('fs');
const csvWriter = require('csv-write-stream');
var writer = csvWriter();

const createEntries = (int) => {
  outArr = [];
  writer.pipe(fs.createWriteStream('./test.csv'));
  for (var i=0; i<int; i++) {
    var entry = {};
    caller.forEach((item, i)=> {
      //determine if I fill the field or not
      if (item.name !== 'overallRating' && item.name !== 'review') {
        var prob = Math.random() > 0.5;
        if (prob){
          entry[item.name] = '';
          return;
        }
      };
      if (!Object.values(entry).includes('United States of America') && item == state){
        entry[item.name] = '';
        return;
      }
      else entry[item.name] = item();
    })
    // fs.writeFile(outFile, entry + '\n', (err, response)=> err? console.log(err) : createEntries(int-1))
    writer.write(entry);
    // outArr.push(entry);
  }
  // return outArr;
  writer.end();
};

module.exports =  createEntries;

