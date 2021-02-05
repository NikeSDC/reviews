var fs = require("fs");

let inter = new Set;
fs.readFile("cities3.txt", (error, text) => {
  if (error) { throw error; }
  text.toString().split("\n").forEach((line, index) => {
    if (line.substring(0, 3) === '...') return;
    //split line at spacesk / create an out arr / append to out arr until currStr.substring(0, 3)='...'
    let addStr = '';
    for (var i = 0; i < line.length; i++) {
      if (line.substring(i, i+3) === '...') break;
      addStr += line.charAt(i);
    }
    if (addStr!=='') inter.add(`${addStr}`);
    console.log(addStr);
  });
  console.log(inter);

  fs.writeFile("cities2.json", JSON.stringify([...inter]), (err) => {
    if (err) {
      console.log(err);
      return
    };
    console.log('printed to file');
  })
});
