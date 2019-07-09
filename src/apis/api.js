import axios from 'axios';

let KEY = "<api key>"; 

export default axios.create({
    baseURL: `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/`,
    headers: {
        "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
        "X-RapidAPI-Key": KEY
      }
})