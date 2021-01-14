const axios = require('axios');
var MockAdapter = require("axios-mock-adapter");
const exampleGetResponse = require('./exampleData.js');

// MOCK ADAPTER
// This sets the mock adapter on the default instance
var mock = new MockAdapter(axios);

// Mock any GET request to /users
// arguments for reply are (status, data, headers)
mock.onGet("http://localhost:3000/reviews").reply(200, {
  data: exampleGetResponse
});

// axios.get("/users").then(function (response) {
//   console.log(response.data);
// });

// --------------------------------------------------------------


test('Get request is recieving results when called', () => {

  return axios.get('http://localhost:3000/db')
    .then((result) => {
      console.log('This is the length of the data: ', result.data.length);
      expect(result.data.data.length).toEqual(109);
    })
    .catch((err) => {console.log(err)})

})