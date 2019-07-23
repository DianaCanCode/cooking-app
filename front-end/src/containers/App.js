import React, { Component } from "react";
import './App.css';
import SearchBar from '../components/SearchBar/SearchBar'; 
import SubmitButton from '../components/SubmitButton/SubmitButton'; 
import Navbar from "../components/Navbar/Navbar";
import api from '../apis/api';
import Recipe from '../components/Recipe/Recipe'; 
import Select from 'react-select'; 
import RecipePage from '../components/RecipePage/RecipePage';

class App extends Component {
  state = {
    recipes: [],
    recipesBool: false,
    recipePageBool: false,
    recipeSearcBarBool:true,
    recipeID: null,
    recipeName:null,
    recipeImage: null,
    apiResponse: "" 
}

// callAPI() {
//   fetch("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/")
//       .then(res => res.text())
//       .then(res => this.setState({ apiResponse: res }));
// }

// componentWillMount() {
//   this.callAPI();
// }


handleSubmit = async (termFromSearchBar) => {
  const response = await api.get('/search', {
      params: {
          query: termFromSearchBar
      }
  })
  if(response.data.results.length > 0) {
    this.setState({
      recipes : response.data.results,
      recipesBool: true 
    })
  }
    // else {
    //    create card which will inform user to type ingedients  
    // }
};

// componentDidUpdate(previousProps, previousState) {
//   if (previousProps.recipeID !== this.props.recipeID) {
//       this.setState({recipePageBool: true})
//   }
// }

handleRecipe = (recipeID,recipeImage,recipeName) => {
  if(recipeID){
  this.setState({
    recipeID: recipeID,
    recipeImage: recipeImage,
    recipeName:recipeName,
    recipesBool: false,
    recipePageBool: true,
    recipeSearcBarBool:false
  }) 
  console.log("global recipe ID "+ this.state.recipeID)
}
  console.log("check"+recipeID)
} 


  render() {
    let displayedRecipes = null;
    let { recipes } = this.state; 
    let displaySelectedRecipe = null; 
    let displaySearchBar = null; 
    

    if(this.state.recipePageBool) {
      displaySelectedRecipe = (
          <div> 
              <RecipePage recipeID={this.state.recipeID} recipeImage={this.state.recipeImage} /> 
          </div>
      ) 
    }


    //Testing new component: 
    const options = [
      { value: 'chocolate', label: 'Chocolate' },
      { value: 'strawberry', label: 'Strawberry' },
      { value: 'vanilla', label: 'Vanilla' }
    ]

    
    const MyComponent = () => (
      <div className="select"> 
      <Select options={options} />
      </div> 
    )


    if(this.state.recipesBool) {
      displayedRecipes = (
        <div className="tileHolder">
          {
            recipes.map( recipe => 
              <Recipe  key={recipe.title} recipeName={recipe.title} recipeID={recipe.id} format={recipe.image.split(".")[1]} displayRecipePage={this.handleRecipe}> </Recipe>
            )
          }
        </div>
      )
    }
    console.log(this.state.recipes)

    if(this.state.recipeSearcBarBool) {
      displaySearchBar = (
        <div>
             <SearchBar handleFormSubmit={this.handleSubmit}/>
        </div>
      )
    }

    return (
      <div className="App">
        <Navbar/>
          {displaySearchBar}
          {displayedRecipes }
        
          {MyComponent}
          {displaySelectedRecipe}
          {/* <p displayRecipePage={this.handleRecipe}> testing </p> */}
          {/* <RecipePage  recipeID={this.state.recipeID} />  */}
       
      </div>
    );
  }
}

export default App;
