var express = require('express');
var router = express.Router();
var axios = require('axios')

let KEY = ""; 
api = axios.create({
  baseURL: `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/`,
  headers: {
      "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
      "X-RapidAPI-Key": KEY
    }
})

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("hello from here")
});

router.get('/recipes/search', function(req, res, next) {
  api.get('/search', {
    params: {
        query: req.query.query
    }
  }).then(function (response) {
    res.header("Access-Control-Allow-Origin", "*");
    res.send(response.data)
  }).catch(function (error) {
    console.log(error);
  });
});

module.exports = router;
