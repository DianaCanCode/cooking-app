import React, { Component } from "react";
import './App.css';
import SearchBar from '../components/SearchBar/SearchBar'; 
import SubmitButton from '../components/SubmitButton/SubmitButton'; 
import Navbar from "../components/Navbar/Navbar";
import api from '../apis/api';
import Recipe from '../components/Recipe/Recipe'; 
import Select from 'react-select'; 

class App extends Component {
  state = {
    recipes: [],
    selectedVideo: null,
    recipesBool: false,
    testRecipes:[1,2,3,4,5,6,7,8,9]
}
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
    //    tell user stop doing stupid stuff 
    //    create card which will show user blah blah.. 
    // }
};


  

  render() {
    let displayedRecipes = null;
    let { recipes } = this.state; 
    console.log(recipes)

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
        <div>
          {recipes.map(recipe=> <Recipe key={recipe.title} recipeName={recipe.title} recipeID={recipe.id} > </Recipe>)}
        </div>
      )
      // console.log(this.state.recipes[0].imageUrls)
    }
    console.log(this.state.recipes)
    

    return (
      <div className="App">
        <Navbar> </Navbar> 
        <SearchBar handleFormSubmit={this.handleSubmit}></SearchBar>
        {/* <SubmitButton  > </SubmitButton> */}
        {displayedRecipes}
        {MyComponent}
      </div>
    );
  }
}

export default App;
