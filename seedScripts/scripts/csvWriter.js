const csvWriteStream = require('csv-write-stream');
const createEntries = require('./madLibDraft.js');
// node --max-old-space-size=8192 csvWriter.js
createEntries(10000000);



// var writer = csvWriter({ sendHeaders: false })
// writer.pipe(fs.createWriteStream('out.csv'))
// writer.write({ hello: "world", foo: "bar", baz: "taco" })
// writer.end()

// const nikeTableCSV = () => {
//   writer.pipe(fs.createWriteStream('db/test.csv'));
//   for (var i = 0; i < 10000000; i++) {
//     writer.write({
//       shoe_name: `Nike ${faker.name.firstName()} ${faker.random.word()}`,
//       shoe_subname: `${gender[randomizer(gender)]} ${sports[randomizer(sports)]} shoes`,
//       shoe_image: `${faker.image.sports()}`,
//       shoe_price: `$${faker.finance.amount(100, 500)}`
//     })
//   }
//   writer.end()
// }

