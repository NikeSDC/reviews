const curFolder = './';
const fs = require('fs');

//read the current directory
//for each directory
  //read files in directory
  //for each file in directory
    //if file is not json: convert to json

fs.readdir(curFolder, (err, folders)=> {
  folders.forEach(folder=> {

    fs.readdir(`./${folder}`, (err, files)=> {
      if (files===undefined) return;
      files.forEach(file=> {

        if (file.split('.')[1]==='json') return;
        fs.readFile(`./${folder}/${file}`, (err, contents)=> {

          if (contents===undefined) return;
          contents=contents.toString().split('\n');
          contents.pop();
          let stringified = JSON.stringify(contents);
          fs.writeFile(`./${folder}/${file}.json`, stringified, (err, rep)=> {
            err ? console.log(err) : console.log('write to file')
          })
        })
      })
    })
  })
})