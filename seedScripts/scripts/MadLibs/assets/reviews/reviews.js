const { r } = require('./jsonImporter.js');


const arrival = () => {
  //noun* + pastDeliveryVerb + pastBrokenVerbs
  //determine whether or not you use the fields marked *
  //return the construct;
  var retStr = '';
  if (Math.random()>0.5) retStr += r('delivNouns') + ' ';
  retStr += `${r('travelVerbs')} ${r('pastBrokenVerbs')}.`;
  return retStr;
};

const delivery  = () => {
  //choose a pattern at random.
  //construct & return the pattern
    // nounn * + verb + adjective * +(number + days) / (duration)
  // (verb + quantAdject) / quantAdjective + deliveryAdjective
  // deliveryAdjectives + verbs
  // productNoun + pastVerbs + deliveryVerb
  // delivNoun + pastVerb + deliveryAdjectives

  var str = '';
  var index = Math.floor(Math.random() * 5) + 1;

  switch(index) {
    case 1:
      str+= `${r('delivNouns')} ${r('pastVerbs')} after ${Math.floor(Math.random()*10)} days. `;
      break;
    case 2:
      str += `${r('pastVerbs')} ${r('quantAdjectives')} ${r('deliveryAdjectives')}.`;
      break;
    case 3:
      str += `${r('quantAdjectives')} ${r('delivDurations')} ${r('deliveryVerbs')}. `;
      break;
    case 4:
      str += `${r('delivNouns')} was ${r('quantAdjectives')} ${r('delivDurations')} ${r('deliveryVerbs')}. `;
      break;
    case 5:
      str += `${r('delivNouns')} ${r('pastVerbs')} ${r('deliveryAdjectives')}. `;
      break;
  }
  return str;
};

const durability  = () => {
  // sensationVerb + quantAdj + solidityAdj
  // article + product / (noun + verb) + soldityAdj
  let str='';
  var index = Math.floor(Math.random() * 2)+1;

  switch(index) {
    case 1:
      str += `${r('sensationVerbs')} ${r('quantAdjectives')} ${r('solidityAdjs')}.`;
      break;
    case 2:
      str += `${r('articles')} is ${r('quantAdjectives')} ${r('solidityAdjs')}.`;
      break;
  }
  return str;
};

const likeability  = () => {
  // article * + adverb * + likeVerb + 'it'
  str = '';
  if (Math.random() > 0.5) str += r('likeabilityArticles') + ' ';
  if (Math.random() > 0.5) str += r('adverbs') + ' ';
  str+= `${r('likeVerbs')} ${r('articles')}.`;
  return str;
};

const quality = () => {
  let str='';
  var index = Math.floor(Math.random() * 3) + 1;
  switch(index){
    case 3:
      str+= `${r('articles')} ${r('sensationVerbs')} ${r('quantAdjectives')} ${r('qualities')}.`;
      break;
    case 2:
      str+= ` ${r('sensationVerbs')} ${r('quantAdjectives')} ${r('qualities')}.`;
      break;
    case 1:
      str+= ` ${r('sensationVerbs')} ${r('qualities')}.`;
      break;
  }
  return str;

};

const dispatcher = (index) => {
  switch(index) {
    case 1:
    return arrival();
    case 2:
    return delivery();
    case 3:
    return durability();
    case 4:
    return likeability();
    case 5:
    return quality();
  }
};

let randIndex = () => Math.floor(Math.random() * 5) + 1;

const reviewBuilder = (amountOfTopics = randIndex())=> {
  // take an array
  // how many elements are going to be pulled out ? 
  // pull out some elements at random from the array
  // decide if some elements are going to be repeated (if they can)
  //return the combination

  let a = [
    arrival,
    delivery,
    durability,
    likeability,
    quality,
  ];
  let curTopics = [];
  for (var i=0; i<amountOfTopics; i++) {
    let curIndex = randIndex();
    while (curTopics.includes(curIndex)) {
      curIndex = randIndex();
    }
    // if curIndex == '2' ==> Determine which topics can have repetition
    curTopics.push(curIndex);
  }
  let returner = curTopics.map(topic => {
    return dispatcher(topic);
  })
  return returner.join(' ');
};

module.exports = {
  reviewBuilder,
  dispatcher,
  Rarrival: arrival,
  Rdelivery: delivery,
  Rdurability: durability,
  Rlikeability: likeability,
  Rquality: quality,
};
