const axios = require('axios')
const Reviews = require('./')

var api = "78a065c0-5608-11eb-8944-0b5cc609a5a5"
var results = [];
var seed = () => {
   axios.get('https://app.reviewapi.io/api/v1/reviews?apikey=78a065c0-5608-11eb-8944-0b5cc609a5a5&url=https%3A%2F%2Fwww.capterra.com%2Fp%2F140650%2FRecruitee&amount=100', {
  headers: {
    'Authorization': api
  }
})
// .then(res => {results.push(res.data)})
// .then(console.log(results))
.then(
  res => {Reviews.create(res.data)}
)
.catch(err => {console.log(err)})
}

seed()
// console.log(results)

//password: !KWhXYZn!V!L7tN
