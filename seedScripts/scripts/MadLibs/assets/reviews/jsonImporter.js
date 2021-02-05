const fs = require('fs');

const adverbs = require('../username/json/adverbs.json');
const articles = require('./delivery/articles.json');
const deliveryAdjectives = require('./delivery/deliveryAdjectives.json');
const delivDurations = (require('./delivery/delivDurations.json'));
const deliveryVerbs = require('./delivery/verbs.json');
const delivNouns = require('./delivery/delivNouns.json');
const likeabilityArticles = require('./likeability/articles.json');
const likeVerbs = require('./likeability/likeVerbs.json');
const pastBrokenVerbs = require('./arrival/pastBrokenVerbs.json');
const pastVerbs = require('./delivery/pastVerbs.json');
const qualities = require('./quality/quality.json');
const quantAdjectives = require('./delivery/quantAdjectives.json');
const sensationVerbs = require('./durability/sensationVerb.json');
const solidityAdjs = require('./durability/solidityAdj.json');
const travelVerbs = require('./delivery/travelVerbs.json');

const words = {
  adverbs,
  articles,
  delivDurations,
  deliveryAdjectives,
  deliveryVerbs,
  delivNouns,
  likeVerbs,
  likeabilityArticles,
  pastBrokenVerbs,
  pastVerbs,
  qualities,
  quantAdjectives,
  sensationVerbs,
  solidityAdjs,
  travelVerbs,
};
const printFileNamesInCurrentDir=()=>{
  fs.readdir('./', (err, folders)=>{
    folders.forEach(folder=> {
      if (folder.split('.')[1]==='js') return;
      fs.readdir(`./${folder}`, (err, files)=> {
        files.forEach(file=> {
          if (file.split('.')[1]==='json') console.log(`./${folder}/${file}`);
        })
      })
    })
  });
};

const Length = {
  adverbsLength: adverbs.length,
  articlesLength : articles.length,
  delivDurationsLength: delivDurations.length,
  deliveryAdjectivesLength : deliveryAdjectives.length,
  deliveryVerbsLength : deliveryVerbs.length,
  delivNounsLength : delivNouns.length,
  likeVerbsLength : likeVerbs.length,
  likeabilityArticlesLength : likeabilityArticles.length,
  pastBrokenVerbsLength : pastBrokenVerbs.length,
  pastVerbsLength : pastVerbs.length,
  qualitiesLength : qualities.length,
  quantAdjectivesLength : quantAdjectives.length,
  sensationVerbsLength: sensationVerbs.length,
  solidityAdjsLength : solidityAdjs.length,
  travelVerbsLength : travelVerbs.length,
};

const randomizer = (validator) => {
  return words[validator][Math.floor(Math.random() * Length[validator + 'Length'])]
};

module.exports = {
  r:randomizer,
  w: words
};