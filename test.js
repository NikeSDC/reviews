const axios = require('axios');
const MockAdapter = require('axios-mock-adapter');
const exampleGetResponse = require('./exampleData.js');

// MOCK ADAPTER
// This sets the mock adapter on the default instance
const mock = new MockAdapter(axios);

// Mock any GET request to /users
// arguments for reply are (status, data, headers)
mock.onGet('http://localhost:3000/reviews').reply(200, {
  data: exampleGetResponse,
});

 test('Get request is recieving results when called', () => { // eslint-disable-line
  return axios.get('http://localhost:3000/reviews')
    .then((result) => {
      expect(result.data.data.length).toEqual(30); // eslint-disable-line
    })
    .catch((err) => {
      console.log(err);
    });
});
